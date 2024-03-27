import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { memo } from "react";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("screen");

const SvgComponent = (props: SvgProps) => (
  <Svg height={480} width={width + 5} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M16.544 245.648H-93.985l-65.511-177.74h110.529l65.511 177.74Z"
        opacity={0.51}
      />
      <Path
        fill="#D3BBFF"
        d="M314.376 158.57c7.328 17.767 12.847 36.37 9.771 54.601-3.077 18.231-16.117 36.185-38.102 44.188-21.89 8.003-48.222 5.068-72.427 1.081-21.732-3.584-43.59-8.003-62.751-16.655-19.162-8.652-35.5-22.094-40.544-38.255-2.285-7.323-2.221-14.925-.794-22.279.825-4.357 2.189-8.745 5.171-12.484 8.027-10.074 25.856-13.257 41.75-12.391 18.052.988 35.849 6.056 50.378 14.368 7.424 4.234 14.086 9.332 22.304 12.639 8.248 3.275 18.875 4.388 26.299.432 12.246-6.52 11.326-23.824 26.173-26.142l32.772.897Z"
      />
      <Path
        fill="#D3BBFF"
        d="M52.995 165.924c0-.031 0-.031 0 0 13.546-2.967 29.662-5.593 41.845-7.385 3.933-.587 7.962-1.082 11.96-1.267 28.869 27.594 73.094 63.562 45.81 100.272-10.469 13.998-31.249 2.565-40.544-11.557-17.734-28.305-32.042-58.649-59.071-80.063Z"
      />
      <Path
        fill="#8A3FFC"
        d="M83.291 256.247c.222 13.102-12.182 25.524-27.663 23.299-10.502-1.174-19.257-7.138-26.047-14.77-2.855-15.049-5.9-30.097-7.867-45.146-2.19-16.779-7.36-36.432 7.106-45.795 2.792-1.823 5.933-3.059 9.137-4.079 11.516 10.043 21.382 21.971 30.075 35.258 10.31 14.863 15.45 32.816 15.26 51.233Z"
      />
      <Path
        fill="#8A3FFC"
        d="M55.627 279.515c15.482 2.225 27.886-10.166 27.664-23.299.19-18.417-4.95-36.37-15.228-51.295-8.724-13.287-18.59-25.215-30.075-35.258 1.84-.587 3.712-1.081 5.584-1.576a263.104 263.104 0 0 1 9.39-2.224h.032c27.03 21.414 41.337 51.758 59.071 80.063 9.327 14.122 30.075 25.555 40.544 11.557 27.284-36.71-16.941-72.678-45.81-100.273 4.441-.185 5.71.031 9.994 1.051 15.798 3.801 34.674 24.288 44.351 37.019 10.881 14.276 13.26 19.467 21.097 35.505 14.973 30.622 20.43 66.591 24.014 101.199-24.998 2.534-50.378 6.304-75.44 6.088-31.694.741-62.847-1.205-94.032-3.028.127-4.296.158-8.591.095-12.917-.35-19.189-3.649-38.317-7.265-57.444 6.757 7.694 15.545 13.658 26.014 14.832Z"
      />
      <Path
        fill="#D3BBFF"
        d="M130.816 338.133c25.062.217 50.442-3.553 75.441-6.087.348 3.275.666 6.551.983 9.795-56.755 5.253-114.653 6.922-170.679-.927.096-1.946.16-3.862.223-5.809 31.185 1.823 62.37 3.77 94.032 3.028Z"
      />
      <Path
        fill="#D3BBFF"
        d="M24.664 414.52c2.57-8.59 4.251-17.397 5.964-26.173 3.046-15.759 5.14-31.518 5.933-47.401 56.026 7.849 113.954 6.18 170.679.927.349 3.646.698 7.292 1.015 10.877a675.977 675.977 0 0 0 13.071 83.555c-68.082 3.832-135.973 3.925-203.324-2.781 2.348-6.304 4.727-12.576 6.662-19.004Z"
      />
      <Path
        fill="#D3BBFF"
        d="M15.052 441.898a263.188 263.188 0 0 1 2.982-8.374c67.351 6.705 135.274 6.612 203.324 2.781a857.56 857.56 0 0 0 3.045 13.102c-70.017 4.48-141.714 8.652-210.398-4.265.317-1.081.698-2.163 1.047-3.244Z"
      />
      <Path
        fill="#8A3FFC"
        d="M224.402 449.407a680.92 680.92 0 0 0 33.977 103.548L13.56 599.8c-22.08-44.342-14.91-107.101.444-154.657 68.652 12.947 140.35 8.775 210.398 4.264Z"
      />
      <Path
        fill="#D3BBFF"
        d="M81.007 256.956c-.38-34.423-10.976-75.768-47.46-89.921-9.866-3.831-20.652-4.913-31.28-4.727-48.158.865-94.476 28.954-117.825 69.99-5.076 8.899-7.297 14.121-11.009 28.397-38.069 146.84 107.737 7.138 109.418 5.717C7.154 246.296 45 245.369 72.094 261.715l8.914-4.759Z"
      />
      <Path
        fill="#8A3FFC"
        d="M-18.196 265.424c15.767-12.731 36.039-17.892 56.28-16.13 1.84.154 1.871 2.997 0 2.812-19.448-1.669-39.054 3.059-54.218 15.326-1.428 1.144-3.49-.834-2.062-2.008Z"
      />
      <Path
        fill="#8A3FFC"
        d="M79.547 256.957c-.54-36.247-12.817-80.713-53.932-90.941-34.485-8.59-73.887 4.419-101.582 24.535-15.672 11.372-28.775 25.864-38.324 42.458-.919 1.576-3.427.154-2.506-1.422 17.67-30.653 47.46-54.138 81.881-64.706 18.083-5.562 38.26-7.972 57.01-4.511 18.146 3.368 33.088 14.214 43.272 29.015 13.197 19.252 16.782 42.86 17.131 65.572-.031 1.823-2.918 1.823-2.95 0Z"
      />
      <Path
        fill="#BC95FF"
        d="M189.443 362.051c.443 4.696 1.109 9.455 1.3 14.183.095 1.978.127 3.955-1.46 5.438-1.967 1.855-5.552 1.576-8.026 1.793l-14.086 1.205c-.603.062-1.237-.464-1.395-1.051-1.841-6.983-2.316-13.998-1.365-21.167.222-1.792 3.141-1.792 2.887 0-.919 6.922-.507 13.658 1.238 20.426-.476-.34-.92-.68-1.397-1.051 2.919-.247 5.87-.494 8.789-.773 2.252-.185 6.757.217 8.787-.772 4.029-1.916 2.95-5.068 2.633-8.56a951.34 951.34 0 0 1-.888-9.764c-.095-1.7 2.823-1.7 2.983.093ZM137.669 364.987c.032 6.026-.634 11.928-1.903 17.799-.16.649-.794.958-1.397 1.05-3.996.433-7.994.958-11.991 1.298-2.348.186-4.854.278-6.726-1.328-2.031-1.731-1.967-4.419-1.903-6.83.094-4.295.253-8.621.38-12.916.063-1.823 2.95-1.823 2.887 0-.063 2.534-.158 5.068-.222 7.602-.032 1.514-.096 3.028-.127 4.573-.063 2.379-.254 2.595 1.713 4.511 1.999 1.947 1.682 1.793 3.998 1.576 1.237-.092 2.506-.278 3.743-.401 2.76-.309 5.489-.588 8.248-.897-.475.34-.92.68-1.396 1.051 1.238-5.624 1.809-11.279 1.809-17.026-.032-1.885 2.887-1.885 2.887-.062ZM191.884 400.739c.095 5.778.159 11.556.253 17.335 0 .834-.665 1.329-1.458 1.421-4.569.526-9.105.896-13.705.958-2.729.062-6.092.464-8.471-1.112-1.872-1.205-2.379-3.028-2.665-5.13-.634-4.388-.381-9.085-.539-13.503-.063-1.823 2.824-1.823 2.918 0 .096 2.904.223 5.809.317 8.714.16 4.14 0 7.416 5.045 8.25 5.298.865 11.865-.371 17.131-.989-.476.464-.983.927-1.458 1.422-.096-5.779-.16-11.557-.255-17.335-.032-1.855 2.855-1.855 2.887-.031ZM136.368 399.934c.285 3.832.285 7.633-.158 11.465-.255 2.07-.127 5.036-1.586 6.736-1.111 1.298-2.855 1.39-4.443 1.669-3.266.556-6.598.957-9.929 1.297-4.251.433-8.692.742-10.025-3.986-1.713-6.056-.698-13.596.19-19.714.255-1.793 3.046-1.02 2.793.741-.667 4.604-.92 9.27-.635 13.906.19 2.873-.223 5.623 3.68 6.52 1.649.37 4.092-.309 5.742-.495 2.348-.247 5.139-.309 7.424-1.02 2.348-.71 2.823-.927 3.585-3.43 1.269-4.109.792-9.517.475-13.719-.158-1.762 2.761-1.762 2.887.03ZM193.661 434.141c0 3.399 1.491 7.726-.888 10.723-2.665 3.368-9.359 3.43-13.357 3.77-3.141.247-9.739 1.359-12.213-1.267-1.492-1.576-1.365-4.234-1.618-6.211-.509-3.492-.984-6.953-1.492-10.445-.254-1.792 2.538-2.533 2.792-.741.508 3.492.984 6.952 1.491 10.444.317 2.225.032 3.214 2.157 4.512 2.095 1.267 3.743 1.112 6.187 1.05 3.172-.092 8.406.124 11.167-1.545 4.282-2.595 2.855-6.334 2.855-10.259.032-1.854 2.919-1.854 2.919-.031ZM135.574 431.454c-.16 4.202.951 11.248-1.809 14.894-2.792 3.615-8.344 2.534-12.245 2.07-3.205-.371-6.473-.772-9.613-1.483-1.714-.371-3.173-.433-4.03-1.978-.824-1.452-.602-4.109-.698-5.654-.222-3.678-.222-7.324-.063-11.001.095-1.823 2.982-1.823 2.919 0-.159 3.677-.191 7.323.063 11.001.063.834.127 1.699.191 2.533-.159 1.793.666 2.596 2.41 2.38 1.492.71 3.903.68 5.521.927 2.284.34 4.695.68 7.043.834 2.348.155 5.678-.649 6.884-2.966.634-1.236.254-3.801.317-5.284.095-2.102.159-4.203.254-6.273 0-1.823 2.918-1.823 2.856 0Z"
      />
      <Path
        fill="#8A3FFC"
        d="M152.134 399.317c1.397 1.946 2.792 4.109 2.475 6.612-.254 1.793-1.364 3.585-3.235 4.11-1.841.525-3.808-.247-4.982-1.668-1.522-1.885-1.237-4.296-.285-6.335.762-1.638 3.268-.216 2.506 1.421-.507 1.082-.698 2.565.317 3.43.856.742 1.904.587 2.475-.371 1.174-1.915-.698-4.264-1.808-5.778-1.048-1.483 1.459-2.905 2.537-1.421ZM149.057 252.6c-4.188-11.062-10.66-20.889-19.194-29.232-1.333-1.298.73-3.275 2.063-2.008 8.882 8.683 15.608 18.973 19.954 30.468.634 1.73-2.189 2.441-2.823.772Z"
      />
      <Path
        fill="#fff"
        d="M205.242 324.321c-25.57 3.276-51.426 4.666-77.187 5.501-30.075.988-60.308 1.081-90.32-1.514-1.84-.155-1.872-2.998 0-2.812 29.98 2.595 60.245 2.502 90.32 1.514 25.761-.835 51.617-2.225 77.187-5.501 1.84-.247 1.808 2.596 0 2.812ZM227.733 462.323c-71.792 11.773-145.68 9.084-216.362-7.942-1.808-.432-1.047-3.152.761-2.719 70.175 16.903 143.523 19.653 214.808 7.941 1.84-.309 2.633 2.411.793 2.72Z"
      />
      <Path
        fill="#fff"
        d="M235.094 502.278c-15.45-6.612-26.998-19.683-31.534-35.505-.508-1.761 2.283-2.503 2.792-.741 4.345 15.172 15.418 27.47 30.201 33.805 1.714.711.223 3.152-1.459 2.441ZM43.54 463.59c-2.253 20.148-19.892 36.432-40.671 37.421-1.872.093-1.872-2.75 0-2.812 19.098-.896 35.722-16.037 37.784-34.578.158-1.823 3.077-1.823 2.887-.031Z"
      />
      <Path
        fill="#242E49"
        d="M112.385 93.03c3.903-4.42 3.49-11.403.158-16.223-3.33-4.82-8.977-7.725-14.751-9.178-12.563-3.182-26.998.031-35.849 9.301-8.851 9.27-10.85 24.505-3.553 34.949 6.281 8.992 17.607 13.102 28.425 15.883.984.247 1.999.494 2.982.34 1.364-.247 2.475-1.205 3.458-2.163 6.345-6.335 10.755-14.523 12.532-23.207l6.598-9.702Z"
      />
      <Path
        fill="#242E49"
        d="M60.546 95.038c-10.533-13.658-27.854-17.953-43.05-9.456-4.95 2.781-9.55 7.447-9.296 13.01.35 7.57 5.266 12.854 5.266 20.425 0 6.86-7.328 11.371-14.022 13.534-6.694 2.132-14.34 3.708-18.337 9.363-7.36 10.445.666 22.867-7.36 33.682-6.186 8.343-1.46 16.81 6.44 22.495 3.998 2.874 8.915 3.616 13.705 2.38 7.995-2.04 16.878-9.981 17.417-17.984.254-4.017-1.745-7.787-3.014-11.619-1.269-3.832-1.618-8.529 1.27-11.402 2.76-2.72 7.17-2.627 11.071-2.843 6.504-.371 13.07-2.163 18.115-6.149 5.044-3.987 8.344-10.383 7.455-16.656-1.3-9.27-10.85-16.192-11.199-25.524-.222-5.809 3.744-11.588 9.39-13.472 5.648-1.885 12.5.401 15.673 5.314l.476-5.098Z"
      />
      <Path
        fill="#242E49"
        d="M37.039 86.603c-7.424-3.554-15.99-4.141-23.794-1.39-3.997 1.39-9.866 4.17-10.85 8.559-.697 3.182 1.27 6.21 2.95 8.744 2.444 3.678 5.52 7.386 6.029 11.866.57 5.037-2.443 9.456-6.536 12.268-10.723 7.447-37.657 3.368-32.105 23.577 2.665 9.765 13.102 22.032 3.521 31.426-1.332 1.298-3.363-.711-2.062-2.009 11.262-11-9.834-27.069-3.965-39.985 6.789-14.863 29.98-6.273 37.244-19.9 5.87-11.062-15.069-19.838-5.71-30.87 8.502-10.012 25.76-10.042 36.705-4.79 1.713.866.222 3.307-1.427 2.504ZM17.592 153.409c-6.472 3.152-4.664 11.217-2.792 16.563 1.777 5.068 3.902 10.383 2.157 15.759C13.5 196.33.62 198.03-9.056 197.257c-1.84-.154-1.871-2.966 0-2.843 6.79.557 14.625.433 19.86-4.511 5.932-5.624 3.49-12.546 1.174-19.158-2.316-6.613-3.554-16.007 4.124-19.746 1.681-.865 3.14 1.576 1.491 2.41ZM106.071 75.88c-.032-9.858 12.088-20.673 21.954-13.906 1.713 1.174 2.982 2.75 3.331 4.79.54 3.275-3.49 7.416 1.713 8.714 1.714.432 3.204-.093 4.378 1.607.762 1.081-.254 7.045-.032 7.076 1.84.216 1.84 3.059 0 2.812-3.204-.402-3.045-2.627-3.077-5.192-.032-1.792.444-2.873-1.808-3.491-.604-.155-1.333 0-1.967-.124-1.301-.278-2.412-.803-3.078-2.04-.697-1.266-.412-2.595-.126-3.924.253-1.112 1.015-2.38 1.078-3.522.191-3.554-2.855-5.532-6.028-5.779-7.392-.587-13.419 6.118-13.387 12.947-.032 1.855-2.951 1.855-2.951.031Z"
      />
      <Path
        fill="#8A3FFC"
        d="m211.936 48.285 4.188 2.101c2.537 1.762 2.22 2.38 2.855 5.377l1.618 8.9c.063.309.507.278.539 0l1.237-8.9c.508-2.997.444-3.646 2.887-5.531l3.87-2.256a.27.27 0 0 0 0-.432l-4.473-1.978c-2.506-1.792-2.379-2.997-3.013-5.964l-1.175-8.405c-.063-.309-.507-.278-.539 0l-1.015 8.745c-.507 2.966-.793 4.203-3.172 6.087l-3.807 1.824c-.159.123-.159.34 0 .432ZM340.517 215.612l4.346 2.194c2.665 1.854 2.316 2.472 2.982 5.593l1.713 9.301c.063.309.508.309.571 0l1.301-9.301c.539-3.121.444-3.801 3.014-5.779l4.028-2.379a.285.285 0 0 0 0-.464l-4.663-2.07c-2.602-1.854-2.506-3.121-3.141-6.211l-1.237-8.776c-.063-.309-.54-.309-.57 0l-1.048 9.147c-.508 3.09-.825 4.388-3.331 6.365l-3.965 1.885c-.159.155-.159.371 0 .495ZM181.607 86.076l5.393 2.72c3.3 2.286 2.887 3.059 3.713 6.952l2.093 11.495c.096.371.635.371.73 0l1.618-11.495c.666-3.862.571-4.728 3.743-7.138l4.982-2.935c.19-.155.19-.433 0-.556l-5.774-2.565c-3.236-2.318-3.078-3.894-3.903-7.695l-1.522-10.876c-.096-.371-.635-.371-.73 0l-1.301 11.34c-.634 3.832-1.015 5.439-4.124 7.88l-4.918 2.348c-.222.093-.19.37 0 .525Z"
      />
      <Path
        fill="#5D6A85"
        d="M386.993 51.901c-6.091 2.132-12.342 3.492-18.782 4.14-1.871.186-1.84-2.626 0-2.842a76.401 76.401 0 0 0 18.02-4.048c1.746-.587 2.506 2.132.762 2.75ZM381.98 33.916c-5.456 2.102-10.913 4.234-16.369 6.335-1.746.68-2.476-2.07-.762-2.72 5.457-2.1 10.913-4.233 16.37-6.334 1.712-.68 2.474 2.04.761 2.72ZM374.019 18.62c-5.076 3.122-10.153 6.243-15.229 9.395-1.586.988-3.045-1.484-1.459-2.442 5.076-3.12 10.152-6.242 15.228-9.393 1.586-.99 3.014 1.483 1.46 2.44Z"
      />
      <Path
        fill="#D3BBFF"
        d="M319.832 195.65c-8.661 10.722-19.352 19.406-30.995 20.765-11.644 1.36-24.174-5.995-28.807-20.147l59.802-.618Z"
      />
      <Path
        fill="#242E49"
        d="M320.845 196.669c-8.629 10.506-21.16 22.094-36.134 21.29-12.721-.679-22.144-10.042-26.11-21.29-.603-1.731 2.19-2.472 2.792-.742 3.775 10.754 13.356 19.777 25.665 19.251 13.261-.587 23.952-11.031 31.725-20.487 1.173-1.452 3.236.556 2.062 1.978Z"
      />
      <Path
        fill="#D3BBFF"
        d="M226.72 194.228c-1.364-1.359-2.411-2.781-3.077-4.202-4.252-8.961-3.934-19.22-3.585-29.078.602-15.975 1.205-31.92 1.809-47.896.062-1.545.126-3.09.697-4.542 2.189-5.531 10.881-5.778 15.418-1.854 4.537 3.955 5.996 10.166 7.201 15.976 11.263-11.804 24.429-24.443 40.957-24.72 9.264-.155 18.084 3.769 26.078 8.311 9.867 5.593 19.447 12.701 24.396 22.712 5.774 11.712 4.315 25.71-.254 37.916-4.568 12.205-12.15 23.299-21.921 32.136l-87.719-4.759Z"
      />
      <Path
        fill="#DCE1E8"
        d="m252.135 78.628 2.602.217 1.491-17.305 52.79 4.295-1.491 17.305 2.601.216c5.743.464 9.994 5.377 9.518 10.97l-7.836 91.219c-.572 6.767-6.694 11.804-13.642 11.217l-53.647-4.388c-6.947-.557-12.118-6.52-11.516-13.288l7.837-91.218c.507-5.563 5.551-9.703 11.293-9.24Z"
      />
      <Path
        fill="#DCE1E8"
        d="M252.135 77.207c.856.062 1.744.155 2.601.216-.476.464-.983.927-1.46 1.422.509-5.779.984-11.557 1.492-17.305.064-.71.603-1.483 1.459-1.421 17.607 1.421 35.215 2.874 52.79 4.295.73.062 1.523.587 1.459 1.422-.507 5.778-.983 11.556-1.491 17.304-.476-.464-.951-.958-1.458-1.421 6.852.556 13.292 3.739 13.609 11.31.096 2.193-.317 4.449-.476 6.643-.984 11.557-1.998 23.083-2.982 34.639-1.111 12.886-2.22 25.802-3.331 38.688-.603 7.138.159 16.779-5.932 21.909-3.775 3.182-8.28 3.43-12.976 3.059-5.488-.464-11.008-.896-16.497-1.36-11.262-.927-22.588-1.638-33.85-2.75-6.345-.618-11.738-4.419-13.23-10.661-.602-2.595-.19-5.253.032-7.879.92-10.816 1.872-21.662 2.793-32.477 1.237-14.554 2.506-29.139 3.743-43.694.824-9.239.413-22.217 13.705-21.939 1.871.03 1.871 2.874 0 2.843-11.453-.247-10.216 12.7-10.882 20.394-.983 11.341-1.935 22.681-2.919 34.022-.983 11.371-1.967 22.712-2.918 34.083-.667 7.818-3.363 19.035 7.042 22.063 2.856.835 6.187.742 9.106.989 5.806.464 11.611.958 17.448 1.422 9.581.772 19.226 1.977 28.87 2.348 11.802.464 12.5-9.332 13.229-17.706l2.76-32.075 3.331-38.687c.317-3.678.666-7.386.952-11.063.54-6.922-3.616-10.66-10.565-11.248-.729-.061-1.522-.587-1.459-1.421.507-5.779.984-11.557 1.491-17.305.476.464.984.927 1.46 1.422-17.607-1.421-35.215-2.874-52.79-4.295.475-.464.983-.927 1.459-1.422-.508 5.779-.984 11.557-1.491 17.305-.064.71-.603 1.483-1.459 1.421-.857-.062-1.745-.154-2.602-.216-1.903-.186-1.935-3.029-.063-2.874Z"
      />
      <Path
        fill="#242E49"
        d="M256.353 60.149c.508-5.933 5.838-10.321 11.929-9.827l30.804 2.503c6.092.495 10.597 5.686 10.089 11.619l-.127 1.36-52.822-4.296.127-1.36Z"
      />
      <Path
        fill="#242E49"
        d="M254.956 59.778c2.157-14.864 20.145-10.29 30.646-9.456 4.473.37 9.01.556 13.483 1.112 7.773.958 12.055 7.015 11.421 14.4-.064.71-.603 1.483-1.459 1.422-17.607-1.422-35.215-2.874-52.79-4.296-.73-.061-1.523-.587-1.459-1.421.032-.464.064-.896.126-1.36.159-1.792 3.046-1.823 2.887 0-.032.464-.063.896-.126 1.36l-1.46-1.421c17.607 1.421 35.215 2.873 52.79 4.295l-1.459 1.421c1.142-13.318-13.578-11.99-22.937-12.73-8.883-.712-25.062-5.038-26.87 7.446-.255 1.762-3.046 1.02-2.793-.772ZM302.891 80.235c-14.53-1.174-29.091-2.38-43.622-3.554-1.84-.154-1.871-2.966 0-2.843 14.531 1.175 29.092 2.38 43.622 3.554 1.872.185 1.872 2.997 0 2.843Z"
      />
      <Path
        fill="#F2F5F9"
        d="m237.726 101.478 32.851 2.978-6.322 66.181-32.852-2.977 6.323-66.182Z"
      />
      <Path
        fill="#D3BBFF"
        d="M349.179 151.185c4.473 4.047 12.847-.217 14.116-5.933 1.269-5.717-2.061-11.31-5.487-16.161-7.36-10.383-15.768-20.086-25.095-28.985-2.728-2.596-5.71-5.222-9.453-6.304-3.776-1.082-8.535-.124-10.469 3.06-1.841 2.997-.636 6.736.76 9.918 5.425 12.33 13.23 23.577 21.002 34.733-9.264-10.538-19.733-21.754-34.262-24.35-1.872-.34-3.902-.495-5.584.34-2.348 1.174-3.268 3.986-2.823 6.396.444 2.41 1.967 4.512 3.489 6.52a305.05 305.05 0 0 0 23.318 27.316c-5.012-5.005-10.755-9.393-17.037-13.04-3.077-1.792-6.408-3.43-10.056-3.708-3.649-.278-7.677 1.144-9.359 4.172-2.062 3.677-.126 8.065 2.031 11.649 8.438 14.06 17.384 32.817 33.945 37.823 3.838 1.174 11.802-4.048 15.164-6.149 3.109-1.947 4.284-5.779 3.871-9.209-.413-3.43-1.428-1.607-3.141-4.635 3.268-.154 4.791-2.101 7.804-.989 5.235 1.947 11.231-2.657 12.182-7.818.952-5.16-1.554-10.228-4.345-14.77l-.571.124Z"
      />
      <Path
        fill="#242E49"
        d="M305.62 189.594c-7.518-10.352-15.385-20.672-22.238-31.457-4.505-7.076-5.14-16.995 5.425-18.478 5.424-.773 10.532 1.946 15.005 4.635 5.806 3.492 11.072 7.694 15.894 12.422l-2.061 2.008c-7.552-7.91-14.689-16.13-21.351-24.751-3.427-4.419-10.184-13.565-2.316-17.675 6.186-3.245 16.243 2.163 21.35 5.407 7.836 5.006 14.118 11.897 20.209 18.788-.761.556-1.523 1.143-2.284 1.699-4.854-6.983-9.708-13.967-14.022-21.29-3.332-5.655-8.598-13.133-8.852-19.931-.19-5.191 3.712-8.714 8.884-9.054 6.503-.433 11.452 4.233 15.702 8.343 6.283 6.088 12.151 12.608 17.576 19.437 4.473 5.655 10.057 11.897 11.897 18.973 1.301 5.006.159 10.073-4.282 13.225-3.744 2.658-8.312 3.059-12.025.248.762-.557 1.523-1.144 2.285-1.7 2.855 3.677 5.267 8.621 5.267 13.287-.064 10.074-11.993 11.681-20.019 11.804-1.872.031-1.872-2.812 0-2.812 7.519-.123 18.812-1.606 16.846-11.402-.698-3.368-2.475-6.705-4.6-9.425-1.079-1.39 1.11-2.595 2.284-1.699 5.551 4.202 12.119-2.689 11.897-8.034-.255-5.902-4.696-11.248-8.122-15.852a191.043 191.043 0 0 0-22.334-25.184c-3.807-3.585-9.74-8.56-15.45-5.5-6.503 3.522-.127 13.565 2.22 18.014 5.014 9.487 11.199 18.355 17.322 27.162.92 1.329-1.205 2.936-2.284 1.7-8.629-9.765-18.559-20.92-32.137-23.67-3.046-.618-7.614-1.607-8.154 3.862-.19 2.101 1.365 4.172 2.508 5.81 2.569 3.738 5.551 7.261 8.438 10.753 4.949 6.026 10.151 11.835 15.544 17.459 1.269 1.329-.728 3.306-2.061 2.008-4.251-4.14-8.819-7.879-13.864-11.093-4.568-2.874-11.453-7.323-17.004-4.419-8.566 4.45-.698 13.813 3.013 19.097 6.06 8.652 12.183 17.304 18.401 25.864 1.078 1.483-1.428 2.904-2.507 1.421Z"
      />
      <Path
        fill="#242E49"
        d="M333.981 101.651c.19 3.677-5.901 1.885-7.709 1.112-3.586-1.545-6.377-4.418-7.488-8.096-.539-1.76 2.253-2.502 2.793-.741.666 2.163 2.029 3.955 3.965 5.222a11.775 11.775 0 0 0 2.887 1.391c.476.154.919.278 1.396.37.285.062.602.124.888.124.603-.124.73.093.349.618-.095-1.823 2.823-1.823 2.919 0ZM315.899 127.484c-2.222-.556-4.6.587-6.917.34a11.47 11.47 0 0 1-4.726-1.638c-2.824-1.73-4.601-4.48-4.791-7.725-.095-1.823 2.792-1.823 2.887 0 .19 3.276 3.014 5.748 6.187 6.427 2.76.618 5.361-.834 8.153-.154 1.808.494 1.047 3.214-.793 2.75ZM304.004 149.733c-6.757 2.255-14.181-.619-16.655-7.293-.635-1.73 2.157-2.441 2.791-.742 1.967 5.284 7.931 7.046 13.071 5.315 1.808-.587 2.569 2.132.793 2.72ZM335.344 173.928c2.57 5.531 4.759 12.422-.507 16.995-4.695 4.079-10.754 6.52-17.068 5.068-1.808-.433-1.046-3.152.762-2.72 4.695 1.082 9.168-.525 12.912-3.306 5.108-3.77 3.711-9.548 1.364-14.585-.729-1.669 1.745-3.121 2.537-1.452Z"
      />
      <Path
        fill="#D3BBFF"
        d="M-42.782 340.512c20.146-12.484 65.353-43.724 92.573-63.593 6.853-9.61-3.965-3.461 3.268-18.417 11.738-24.226-9.169-51.511-36.325-47.309-.064 0-.127.031-.19.031-29.98 3.924-48.222 14.122-77.377 21.939-80.263 21.507-81.057 74.471-62.307 105.464 9.676 16.038 46.889 22.65 80.358 1.885ZM117.713 131.501l22.239 3.677c.794-26.853-20.652-46.505-35.151-56.672-7.328-5.16-12.912-7.88-12.912-7.88l-4.187 27.502-12.437 74.811c-4.25 20.765 10.057 30.128 25.92 31.271.253.031.507.031.761.062 19.098 1.298 33.596-16.47 27.95-34.3-5.997-19.096-12.183-38.471-12.183-38.471Z"
      />
      <Path
        fill="#D3BBFF"
        d="M70.698 115.092c4.6 4.388 11.96 4.326 16.465-.154 4.505-4.481 4.442-11.65-.158-16.038-4.6-4.388-11.96-4.326-16.465.155-4.505 4.48-4.442 11.68.158 16.037Z"
      />
      <Path
        fill="#242E49"
        d="M83.102 110.302a663 663 0 0 0-11.611-5.284c-1.713-.741-.222-3.183 1.46-2.441 3.901 1.7 7.74 3.492 11.61 5.284 1.682.773.222 3.214-1.459 2.441ZM117.713 131.501l12.246 39.275-28.425-43.107 16.179 3.832ZM115.207 85.737c6.281 4.141 12.531 8.93 17.86 14.184.73.711.477 2.163-.634 2.348-2.919.557-5.838 1.082-8.755 1.638-1.841.34-2.602-2.379-.762-2.719 2.919-.556 5.837-1.082 8.756-1.638-.223.773-.412 1.576-.634 2.349-5.172-5.068-11.199-9.734-17.29-13.72-1.555-1.02-.096-3.461 1.459-2.442ZM98.9 82.245c-2.791-.247-5.266 1.05-6.535 3.492-.856 1.637-3.331.185-2.506-1.422 1.681-3.244 5.33-5.222 9.041-4.882 1.84.154 1.872 2.966 0 2.812Z"
      />
      <Path
        fill="#fff"
        d="m125.201 111.014-.571-2.936c-6.027 2.009-12.499 3.028-18.908 3.028-1.269 0-1.84 1.545-.856 2.318 0 0 .032 0 .032.031 1.712 1.329 3.647 2.441 5.742 3.368 3.33 1.452 7.043 2.348 10.881 2.596 1.745.123 3.522.092 5.266-.062l-1.586-8.343Z"
      />
      <Path
        fill="#242E49"
        d="M107.309 96.089c-3.965-1.885-8.66-1.39-12.087 1.298-1.427 1.143-3.521-.865-2.062-2.009 4.537-3.553 10.374-4.233 15.609-1.73 1.681.803.222 3.213-1.46 2.44Z"
      />
      <Path
        fill="#242E49"
        d="M102.232 95.007c-.063 1.081-1.11 2.008-2.22 1.947-1.11-.062-2.063-1.051-2.03-2.133.634.958 2.442.773 2.854-.34a2.674 2.674 0 0 0-2.316.371l3.712.155Z"
      />
      <Path
        fill="#242E49"
        d="M103.691 95.007c-.222 1.823-1.649 3.399-3.68 3.368-1.967-.062-3.426-1.73-3.49-3.554-.031-.618.476-1.205 1.08-1.36.665-.185 1.236.155 1.649.65-.222-.31-.064 0 .158-.093.127-.062.096-.062.19-.247.286.68.572 1.39.857 2.07-.507-.124-.793-.03-1.205.247-1.523 1.05-2.982-1.421-1.46-2.44 1.016-.68 2.253-.835 3.427-.526.983.278 1.237 1.267.856 2.07-.444.989-1.523 1.576-2.57 1.638-1.173.062-2.093-.433-2.76-1.298.889-.247 1.809-.463 2.697-.71.032.772 1.237 1.05 1.364.185.095-.773.603-1.422 1.46-1.422.666 0 1.522.65 1.427 1.422Z"
      />
      <Path
        fill="#242E49"
        d="M102.203 99.21c-1.65-.433-3.268-.216-4.79.587-1.619.896-3.11-1.545-1.46-2.441a9.53 9.53 0 0 1 7.011-.865c1.808.463 1.046 3.182-.761 2.719Z"
      />
      <Path
        fill="#D3BBFF"
        d="M-8.928 215.366c-4.6 4.079 14.625-10.105 33.279-25.895 16.243-13.72 17.29-21.167 24.777-32.755 1.967-3.028 6.852-1.298 7.455 2.658 1.237 8.528-1.427 19.467-4.79 25.585-3.141 5.717 2.76 13.566 8.946 11.866 22.937-6.365 50.569-14.647 69.033-15.574 4.981-.247 12.848 2.874 11.865 8.127-.349 1.823-1.808 2.874-3.236 3.739-12.023 7.54-30.646 13.597-46.445 17.428-.73.186-.444 1.36.317 1.329 0 0 21.509-2.534 25.285 5.964 3.902 8.806-2.126 16.81-10.184 17.026 4.95-1.792 45.272 22.681-65.575 49.41l-50.727-68.908Z"
      />
      <Path
        fill="#242E49"
        d="M-7.912 216.355s-.602.618-.476.402c-.285-.68-.57-1.391-.856-2.071-1.11-.185-.857.371-.286-.309.35-.432 1.238-.865 1.65-1.174a194.412 194.412 0 0 0 6.313-4.728 590.916 590.916 0 0 0 17.703-14.06c10.5-8.621 19.637-17.18 26.204-29.015 1.808-3.245 3.902-9.487 7.487-11.186 3.14-1.483 6.694.741 7.805 3.646 2.062 5.315.348 13.071-1.047 18.386-1.428 5.469-8.376 15.759.222 18.849 3.426 1.236 7.899-.896 11.262-1.854 4.029-1.143 8.058-2.255 12.119-3.368 7.518-2.07 15.069-4.048 22.683-5.778 6.503-1.484 13.071-2.781 19.669-3.616 5.108-.649 10.247-1.298 15.038 1.02 3.394 1.638 6.566 4.882 5.139 8.868-1.65 4.605-9.01 7.108-13.102 9.023-6.377 2.967-12.975 5.408-19.669 7.571a259.202 259.202 0 0 1-10.882 3.214c-1.333.371-3.204 1.236-4.568 1.205-1.08-.031-2.634-.185-1.714-.958.73-.587 3.87-.247 4.727-.278 2.475-.062 4.949 0 7.392.247 4.03.433 8.629 1.236 11.739 4.017 8.787 7.849.92 21.074-9.359 21.878-1.714.123-1.872-2.287-.381-2.781 5.044-1.607 11.358 5.16 12.563 9.177 3.616 11.99-13.515 20.796-22.017 24.875-17.449 8.374-36.547 13.504-55.36 18.046-1.808.433-2.601-2.286-.761-2.719 15.704-3.801 31.407-8.065 46.381-14.122 8.312-3.368 17.163-7.292 23.762-13.41 5.298-4.883 7.995-11.866 1.491-16.903-1.427-1.113-4.283-2.565-5.297-2.225l-.381-2.781c7.613-.587 13.292-9.487 8.216-16.037-2.602-3.369-8.089-4.018-12.087-4.327-3.299-.247-6.567-.03-9.866.093-1.491.062-3.3.155-3.522-1.823-.349-3.337 7.582-3.739 9.771-4.357 6.536-1.823 12.976-3.863 19.289-6.273 5.806-2.225 12.943-4.635 17.861-8.497 2.697-2.102 3.966-4.419 1.301-6.953-1.079-1.02-2.633-1.638-4.061-2.04-2.792-.803-5.52-.587-8.375-.339-13.293 1.266-26.364 4.727-39.212 8.126a1609.127 1609.127 0 0 0-20.97 5.81c-4.41 1.236-8.344 2.657-12.277-.433-2.824-2.256-4.537-6.087-3.84-9.641.445-2.348 1.936-4.45 2.761-6.674a48.58 48.58 0 0 0 2.38-8.9c.507-3.09 1.046-6.643.57-9.795-.095-.618-.698-3.739-1.269-3.956-.888-.34-4.06.958-4.631 1.453-.857.772-1.428 2.379-1.999 3.368-2.126 3.708-4.093 7.54-6.44 11.124-7.71 11.742-19.384 20.395-30.329 29.109-4.79 3.831-9.644 7.632-14.593 11.278-1.396 1.051-4.061 3.925-6.091 3.585-.952-.155-1.27-1.36-.857-2.071.222-.37.603-.679.92-.988 1.491-1.175 3.521.834 2.157 2.07Z"
      />
      <Path
        fill="#242E49"
        d="M92.938 213.079c-6.535.927-12.817 2.565-18.876 5.098-1.713.711-3.172-1.73-1.46-2.441 6.314-2.626 12.786-4.419 19.575-5.376 1.808-.279 2.601 2.472.761 2.719ZM109.974 236.039c-9.327 1.606-18.178 4.542-26.553 8.899-1.65.865-3.11-1.576-1.46-2.441a94.003 94.003 0 0 1 27.252-9.178c1.808-.34 2.601 2.38.761 2.72ZM50.682 158.786c1.84 6.087-1.777 13.473-8.883 13.503-1.872 0-1.872-2.811 0-2.811 5.234-.031 7.392-5.655 6.091-9.95-.54-1.731 2.252-2.503 2.792-.742ZM135.354 184.125c-1.809-.031-3.585.124-5.331.618-.507.155-2.189.525-2.41 1.144.285 1.05.539 2.132.824 3.182a6.462 6.462 0 0 0 1.554.186c3.364.216 6.822.031 10.185.031 1.872 0 1.872 2.842 0 2.812-3.712 0-7.677.339-11.358-.093-2.189-.278-4.029-1.422-4.601-3.554-1.522-5.964 6.981-7.2 11.105-7.169 1.903.031 1.903 2.874.032 2.843Z"
      />
      <Path
        fill="#fff"
        d="M59.595 203.932c.857 2.38 1.713 4.728 2.601 7.107.635 1.731-2.189 2.472-2.791.742a641.363 641.363 0 0 0-2.602-7.107c-.634-1.7 2.157-2.441 2.792-.742ZM65.21 227.51c1.301 2.997 1.682 6.056.92 9.239-.444 1.761-3.236 1.02-2.791-.742a10.97 10.97 0 0 0-.635-7.045c-.698-1.699 1.808-3.121 2.506-1.452ZM70.732 250.623c.667 3.43 1.333 6.86 1.999 10.321.349 1.792-2.443 2.534-2.792.742-.666-3.43-1.332-6.86-2.03-10.321-.317-1.792 2.474-2.534 2.823-.742Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h385v480H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
const WelcomeSvg3 = memo(SvgComponent);
export default WelcomeSvg3;
