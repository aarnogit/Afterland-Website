uniform vec4 iMouse;      
uniform float iTime;
uniform vec2 iResolution;
varying vec2 vUv;
uniform sampler2D iChannel0; // Height or depth map of the model
uniform sampler2D iChannel1; // Normal map of the model

const float iridStrength = 0.5;
const float iridSaturation = 0.7;
const float fresnelStrength = 3.0;
const vec3 lightCol = vec3(0.02, 0.7, 0.02);

vec2 mouse;
#define MRX(X) mat3(1.0, 0.0, 0.0 ,0.0, cos(X), -sin(X) ,0.0, sin(X), cos(X)) // x axis rotation matrix
#define MRY(X) mat3(cos(X), 0.0, sin(X), 0.0, 1.0, 0.0, -sin(X), 0.0, cos(X)) // y axis rotation matrix
#define MRZ(X) mat3(cos(X), -sin(X), 0.0, sin(X), cos(X), 0.0, 0.0, 0.0, 1.0) // z axis rotation matrix
#define MRF(X,Y,Z) MRZ(Z) * MRY(Y) * MRX(X) // x,y,z combined rotation macro
#define ROT MRF(iTime * 0.1 + mouse.y, iTime * 0.2 + mouse.x, iTime * 0.3)
const int iter = 256;
const float far = 1000.0;
#define EPSILON 0.00001

// Distance function using height map texture
float sdModel(vec3 p) {
    vec3 texCoord = (p + 1.0) / 2.0; // Normalize coordinates to [0,1] range
    return texture(iChannel0, texCoord.xy).r * 2.0 - 1.0; // Assuming the texture stores distance data
}

// Compute normal vector using normal map texture
vec3 normalModel(vec3 p) {
    vec3 texCoord = (p + 1.0) / 2.0; // Normalize coordinates to [0,1] range
    return normalize(texture(iChannel1, texCoord.xy).rgb * 2.0 - 1.0); // Assuming the texture stores normal data
}

// Color palette function taken from iq's shader @ https://www.shadertoy.com/view/ll2GD3
#define  pal(t) (0.5 + 0.5 * cos(6.283 * (t + vec4(0, 1, 2, 0) / 3.0)))

// RGB to greyscale
vec3 greyScale(vec3 color, float lerpVal) {
    float greyCol = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;
    vec3 grey = vec3(greyCol, greyCol, greyCol);
    return mix(color, grey, lerpVal);
}

void main() {
    vec2 fragCoord = vUv * iResolution;
    mouse = iMouse.xy / iResolution.xy;
    vec2 uv = fragCoord / iResolution.xy;
    uv -= vec2(0.5);
    uv.x *= iResolution.x / iResolution.y;
    uv *= 5.0;

    vec3 camPos = vec3(0.0, 0.0, -20.0);
    vec3 screen = vec3(uv.x, uv.y, -5.0);
    vec3 rayDir = normalize(screen - camPos);

    float depth = 0.0;
    for (int i = 0; i < iter; i++) {
        vec3 tpc = camPos + rayDir * depth;
        tpc = tpc * ROT;
        float distc = sdModel(tpc);
        if (distc < EPSILON) {
            break;
        }
        if (depth > far) {
            break;
        }
        depth += distc;
    }

    vec3 p = camPos + rayDir * depth;
    vec3 rpc = p * ROT;
    float c = sdModel(rpc);
    vec3 nc = normalModel(rpc);
    vec3 nco = normalModel(p); // normal for calculating fresnel
    c = smoothstep(1.0, 0.07, c);

    vec3 up;
    // Calculating up and right surface vectors for texturing
    if (abs(dot(vec3(0.0, 0.0, 1.0), nc)) > 1.0 - EPSILON || abs(dot(vec3(0.0, 0.0, -1.0), nc)) > 1.0 - EPSILON) {
        up = vec3(0.0, 1.0, 0.0);
    } else {
        up = normalize(cross(vec3(0.0, 0.0, 1.0), nc));
    }
    vec3 right;
    if (abs(dot(up, nc)) > 1.0 - EPSILON || abs(dot(-up, nc)) > 1.0 - EPSILON) {
        right = vec3(0.0, 0.0, 0.0);
    } else {
        right = normalize(cross(nc, up));
    }
    vec3 rpco = (rpc - (up + right)) / 2.0; // Modified to match model
    float dRight = (dot((rpco), right)); // right surface vector
    float dUp = dot(rpco, up); // up surface vector

    // Lights
    vec3 lightPos = vec3(2.0, 2.0, -5.0);
    vec3 lightDir = normalize(-lightPos);
    float ldc = dot(lightDir, -nc);
    vec3 rflct = reflect(normalize(p - lightPos), nc);
    float spec = dot(rflct, normalize(camPos - p));

    vec2 uvm = abs(vec2(dRight, dUp)); // texture uv
    vec4 tex = texture(iChannel0, uvm);
    vec4 greyTex = vec4(greyScale(tex.rgb, 1.0), 1.0);
    float fres = 1.0 - dot(nco, normalize(camPos - p));
    fres *= fresnelStrength;
    vec4 irid = pal((c) + (fres * greyTex)); // iridescence
    vec3 col = ((0.4 + 0.3 * ldc + pow(spec, 2.0) * 0.3) * lightCol) * 0.3 * c;
    col += greyScale(irid.rgb, 1.0 - iridSaturation) * c * iridStrength;
    gl_FragColor = vec4(col, 1.0);
}
