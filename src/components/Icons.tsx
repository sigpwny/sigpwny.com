import React from "react"

const icon_style = {
  height: "1em",
  width: "auto",
  display: "inline"
}

export const RightSvg = (style: React.CSSProperties) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{...icon_style, ...style}} fill="currentColor"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1c-4.2-4.5-10.1-7.1-16.3-7.1C266 128 256 138 256 150.3V208H160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8L294.6 135.1z"/></svg>)

export const LeftSvg = (style: React.CSSProperties) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{...icon_style, ...style}} fill="currentColor"><path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1c12.3 0 22.3-10 22.3-22.3V304h96c17.7 0 32-14.3 32-32V240c0-17.7-14.3-32-32-32H256V150.3c0-12.3-10-22.3-22.3-22.3c-6.2 0-12.1 2.6-16.3 7.1L117.5 242.2c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8l99.9 107.1z"/></svg>)

export const DiscordSvg = (style: React.CSSProperties) => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{...icon_style, ...style}}>
      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
    </svg>
  </>
)

export const GitHubSvg = (style: React.CSSProperties) => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{...icon_style, ...style}}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
  </>
)

export const InstagramSvg = (style: React.CSSProperties) => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{...icon_style, ...style}}>
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
    </svg>
  </>
)

export const TwitterSvg = (style: React.CSSProperties) => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{...icon_style, ...style}}>
      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
    </svg>
  </>
)

export const YouTubeSvg = (style: React.CSSProperties) => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{...icon_style, ...style}}>
      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
    </svg>
  </>
)

export const LocationSvg = (style: React.CSSProperties) => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{...icon_style, ...style}}>
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    </svg>
  </>
)

export const PdfSvg = (style: React.CSSProperties) => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{...icon_style, ...style}}>
      <path d="M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"/>
      <path fillRule="evenodd" d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.651 11.651 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.697 19.697 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"/>
    </svg>
  </>
)


/**
 * To update the Pwny icon, ensure that Adobe Illustrator's export options are set to:
 * - Styling: Internal CSS
 * - Font: SVG
 * - Images: Preserve
 * - Object IDs: Layer Names
 * - Decimal: 2
 * - Minify: Yes
 * - Responsive: Yes
 * 
 * Rename "class" to "className" in the SVG code.
 * Turn the contents of the style tag into a string and wrap it in curly braces.
 * - <style>.cls-1{fill:#3c5;}</style>
 * - <style>{".cls-1{fill:#3c5;}"}</style>
 * Add height and width props to the SVG tag.
 */
export const PwnySvg = (style: React.CSSProperties) => (
  <>
    <svg id="Pwny" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 356.73 377.97" style={{...icon_style, ...style}}><defs><style>{".cls-1{stroke: #3c5 ;stroke-linejoin:round;stroke-width:4px;}.cls-1,.cls-2{fill:#3c5;}"}</style></defs><g id="Neck_Bottom"><path d="M168.81,373.43c-40.5-1.84-79.63-17.36-110.39-43.78-.37-.5-.86-.93-1.42-1.25-.68-.38-1.44-.57-2.19-.57-.82,0-1.64,.22-2.36,.67l-22.2,13.7c-7.97-6.05-15.47-12.77-22.35-20.03-2.12-14.04-3.26-28.33-3.38-42.54,12.55-2.66,25.39-4,38.22-4,1.7,0,3.42,.02,5.13,.07,22.76,24.82,53.53,41.16,86.87,46.09,.22,.03,.44,.05,.66,.05,1.42,0,2.77-.67,3.63-1.83l8.45-11.5,42.03-2.87,9.51,5.09c.66,.36,1.39,.53,2.12,.53,.79,0,1.58-.21,2.29-.62,8.72-5.15,16.46-11.58,23.06-19.18,8.36,11.34,18.24,21.34,29.49,29.83-25.91,22.31-55.2,39.85-87.16,52.17Z"/><path className="cls-2" d="M42.73,280.13c1.04,0,2.08,0,3.12,.03,23.31,24.78,54.49,41.1,88.21,46.08,.44,.07,.88,.1,1.32,.1,2.84,0,5.54-1.34,7.25-3.67l7.22-9.82,38.66-2.64,8.37,4.48c1.33,.71,2.79,1.07,4.25,1.07,1.58,0,3.17-.42,4.57-1.25,7.56-4.46,14.4-9.84,20.46-16.07,6.72,8.46,14.3,16.14,22.68,22.97-24.23,20.1-51.35,36.05-80.77,47.5-39.02-1.99-76.69-16.99-106.4-42.38-.69-.81-1.52-1.5-2.48-2.04-1.36-.76-2.88-1.14-4.39-1.14-1.64,0-3.28,.45-4.73,1.34l-19.55,12.06c-6.5-5.11-12.66-10.69-18.39-16.64-1.78-12.16-2.81-24.5-3.07-36.8,11.09-2.11,22.38-3.18,33.67-3.18m0-9c-14.38,0-28.71,1.64-42.73,4.89-.05,16.14,1.17,32.27,3.66,48.22,8.03,8.6,16.85,16.44,26.34,23.4l24.81-15.3v.15c31.98,27.74,72.44,43.78,114.74,45.49,34.42-13.15,66.15-32.48,93.62-57.04-14.32-9.96-26.67-22.48-36.44-36.93-6.98,9.16-15.68,16.89-25.6,22.75l-10.65-5.7-45.4,3.1-9.69,13.19c-33-4.88-63.25-21.18-85.47-46.07-2.39-.09-4.79-.14-7.18-.14h0Z"/></g><g id="Neck_Middle"><path d="M137.57,288.83c-2.44-.33-4.87-.73-7.26-1.19-14.97-2.83-29.26-8.1-42.49-15.65-15.64-8.96-29.21-20.71-40.33-34.9-.87-1.11-2.18-1.72-3.54-1.72-.43,0-.87,.06-1.3,.19-1.77,.54-3.04,2.1-3.19,3.95l-.03,.41c-1.1,.05-2.19,.08-3.28,.08-9.8,0-19.56-2.18-28.42-6.34,1.11-7.7,2.48-15.12,4.07-22.11,6.02-3,12.27-5.67,18.6-7.96,1.4-.51,2.47-1.68,2.83-3.13,2.46-9.72,5.45-19.41,8.91-28.84,4.85,.14,9.67,.82,14.37,2.02,1.11,.28,2.21,.59,3.29,.94,.44,2.1,.95,4.22,1.55,6.39,.11,.79,.26,1.59,.42,2.42l.11,.58c1.68,8.84,4.65,17.34,8.82,25.29,0,0,0,0,0,.01,.07,.2,.16,.4,.25,.58,14.02,26.38,40.06,44.5,69.67,48.48,.2,.03,.4,.04,.6,.04,1.13,0,2.24-.43,3.08-1.22l2.7-2.53,38.65-2.62c.21,.32,1.23,1.89,1.23,1.89,.84,1.29,2.27,2.04,3.77,2.04,.33,0,.66-.04,.99-.11,4.77-1.08,9.52-2.41,14.17-3.97,1.9,5.71,4.19,11.31,6.84,16.72-5.52,5.01-11.66,9.24-18.32,12.62l-4.45-2.02c-.59-.27-1.22-.4-1.86-.4-.1,0-.2,0-.3,.01l-42.88,2.9c-1.32,.09-2.54,.76-3.32,1.82l-3.93,5.34Z"/><path className="cls-2" d="M45.22,176.29c3.43,.28,6.84,.85,10.19,1.71,.19,.05,.37,.1,.56,.14,.29,1.23,.6,2.48,.94,3.74,.12,.82,.27,1.6,.41,2.35l.11,.59c1.74,9.16,4.81,17.99,9.12,26.25,.12,.3,.26,.59,.41,.88,14.7,27.66,42,46.66,73.04,50.83,.4,.05,.8,.08,1.2,.08,2.27,0,4.47-.86,6.15-2.43l1.53-1.43,34.42-2.33c1.71,2.39,4.45,3.77,7.32,3.77,.66,0,1.32-.07,1.99-.22,3.48-.79,6.95-1.7,10.38-2.75,1.24,3.37,2.61,6.69,4.11,9.95-4.01,3.34-8.34,6.27-12.93,8.76l-2.44-1.11c-1.17-.53-2.44-.81-3.72-.81-.2,0-.41,0-.61,.02l-42.88,2.9c-2.64,.18-5.07,1.51-6.64,3.64l-2.33,3.16c-1.48-.23-2.95-.49-4.4-.76-14.47-2.74-28.3-7.83-41.08-15.13-15.14-8.68-28.27-20.04-39.04-33.77-1.74-2.21-4.37-3.45-7.09-3.45-.86,0-1.74,.12-2.59,.38-2.29,.69-4.16,2.24-5.27,4.25-8,0-15.98-1.58-23.39-4.58,.88-5.62,1.89-11.06,3.03-16.28,5.28-2.54,10.71-4.83,16.21-6.82,2.81-1.02,4.93-3.36,5.66-6.26,2.15-8.5,4.71-16.97,7.64-25.27m-5.04-9.21c-.39,0-.78,0-1.17,0-4,10.55-7.39,21.32-10.15,32.26-7.1,2.57-14.02,5.58-20.74,9.01l-.23,.13c-2.16,9.12-3.82,18.44-5.06,27.75,10.3,5.44,21.74,8.25,33.32,8.25,2.49,0,4.98-.13,7.47-.39,.1-1.42,.22-2.79,.33-4.24,11.43,14.59,25.57,26.82,41.65,36.03,13.63,7.78,28.46,13.24,43.88,16.16,3.35,.64,6.73,1.16,10.15,1.57l5.5-7.47,42.88-2.9,6.38,2.9c8.79-4.19,16.83-9.8,23.78-16.62-3.91-7.5-7.08-15.37-9.47-23.49-5.89,2.2-11.93,3.99-18.06,5.38-.41-.62-2.31-3.57-2.67-4.11l-42.88,2.9-3.87,3.63c-28.24-3.79-52.92-20.97-66.29-46.13v-.07c-.06-.11-.12-.22-.16-.33-4.01-7.59-6.87-15.74-8.47-24.18-.19-1.02-.38-1.96-.51-2.9v-.09c-.81-2.96-1.51-5.93-2.07-8.98-1.99-.75-4.03-1.38-6.09-1.9-5.7-1.45-11.55-2.19-17.42-2.19h0Z"/></g><g id="Neck_Top"><path d="M139.65,231.08c-7.5-3.95-14.53-8.74-20.94-14.28-.99-.86-2.29-2-3.46-3.11-.73-.67-1.28-1.2-1.79-1.72l-1.49-1.49c-17.4-17.73-28.43-41.14-31.04-65.89-.24-2.26-2.13-3.99-4.4-4.03-6.31-.11-12.65-.75-18.86-1.92-3.78-5.09-7.12-10.51-9.97-16.17,.48-.78,.97-1.56,1.48-2.37l.11-.17c4.7-7.69,10-15.48,15.8-23.23,4.9-1.49,9.91-2.77,14.89-3.82,1.2-.25,2.25-.99,2.9-2.03,8.9-14.31,21.01-26.49,35.25-35.48,1.75,4.86,3.15,9.85,4.19,14.91-.61,1.09-1.19,2.17-1.73,3.24-.85,1.55-1.6,3.12-2.34,4.65-13,27.84-14.92,59.22-5.43,88.39,.15,.45,.36,.88,.64,1.26,10.16,13.94,23.46,25.71,38.53,34.11,.46,.45,1.02,.81,1.67,1.04l.63,.22c.49,.17,.99,.25,1.49,.25,.23,0,.46-.02,.68-.05,.41,.04,1.96,.2,1.96,.2,3.59,.32,7.18,.48,10.72,.48h0c11.87,0,23.56-1.72,34.85-5.13-2.48,9.44-3.46,19.28-2.89,29.01-2.15,.78-4.34,1.5-6.54,2.14l-2.83-4.38c-.83-1.29-2.26-2.06-3.78-2.06-.1,0-.21,0-.31,.01l-41.72,2.9c-1.04,.07-2.01,.5-2.77,1.21l-3.5,3.29Z"/><path className="cls-2" d="M115.7,62.42c.7,2.37,1.33,4.76,1.86,7.17-.33,.62-.66,1.23-.97,1.85-.89,1.63-1.7,3.31-2.41,4.79-.01,.03-.03,.06-.04,.09-13.46,28.83-15.45,61.38-5.61,91.64,.29,.9,.73,1.75,1.29,2.52,10.44,14.32,24.08,26.44,39.53,35.14,.81,.68,1.76,1.23,2.81,1.6l.28,.1c1.12,.46,2.32,.7,3.53,.7,.32,0,.63-.02,.94-.05,.12,.01,.23,.02,.35,.03l.7,.07s.07,0,.11,.01c3.67,.32,7.39,.49,11.07,.49,9.78,0,19.43-1.13,28.86-3.36-1.16,6.44-1.68,13-1.53,19.54l-.96-1.49c-1.67-2.57-4.52-4.11-7.55-4.11-.21,0-.42,0-.63,.02l-41.72,2.9c-2.07,.14-4.03,1-5.54,2.42l-1.12,1.06c-6.15-3.47-11.94-7.55-17.28-12.16-.96-.83-2.2-1.92-3.31-2.98-.04-.04-.09-.08-.13-.12-.6-.54-1.09-1.02-1.55-1.49-.02-.02-.05-.05-.07-.07l-1.42-1.42c-16.7-17.04-27.28-39.48-29.78-63.21-.48-4.52-4.25-7.98-8.8-8.05-5.47-.09-10.96-.61-16.36-1.53-2.71-3.78-5.18-7.75-7.37-11.85,.03-.05,.07-.11,.1-.16l.11-.18s.05-.08,.08-.12c4.35-7.12,9.27-14.39,14.64-21.63,4.32-1.27,8.72-2.38,13.1-3.3,2.4-.5,4.5-1.97,5.79-4.06,7.51-12.09,17.42-22.59,29-30.81m4.7-13.64c-16.88,9.57-31.1,23.22-41.34,39.7-5.62,1.18-11.18,2.63-16.68,4.35-5.8,7.67-11.6,16.04-16.89,24.69-1,1.58-1.99,3.13-2.9,4.73,3.45,7.24,7.65,14.1,12.53,20.47,7.03,1.43,14.17,2.21,21.34,2.34,2.73,25.86,14.12,50.04,32.33,68.6l1.45,1.45c.62,.64,1.25,1.23,1.91,1.84,1.16,1.1,2.41,2.2,3.61,3.25,7.49,6.47,15.78,11.96,24.66,16.32l5.8-5.45,41.72-2.9,4.63,7.15c4.51-1.17,8.94-2.62,13.27-4.35-1.3-13.28,.45-26.67,5.12-39.17-13.38,5.15-27.56,7.78-41.83,7.78-3.42,0-6.85-.15-10.27-.45-1.15-.12-2.26-.22-3.38-.36,.1,.05,.19,.13,.29,.19l.19,.07c-.06,0-.13-.03-.19-.07l-.63-.22c.06,0,.12,.01,.17,.01s.12,0,.17-.01c-15.14-8.18-28.26-19.65-38.4-33.55-9.1-27.99-7.24-58.38,5.21-85.05,.73-1.51,1.47-3.05,2.26-4.5,.78-1.55,1.64-3.1,2.49-4.55-1.45-7.64-3.68-15.11-6.66-22.3h0Z"/></g><g id="Head"><path d="M315.53,240.06c-12.43,0-24.87-2.81-36.09-8.15-12.35-29.2-39.24-50.46-70.59-55.66-3.38-.55-7.45-.83-12.11-.83-6.05,0-12.95,.48-19.14,1.31-23.25-10.97-33.25-24.15-37.55-33.52-.31-4.2-.28-9.18-.25-14.44,.06-9.85,.11-20.01-1.97-27.95,2.43-14.78,7.73-28.64,15.76-41.26,4.75-.87,9.58-1.43,14.39-1.68,2.02-.1,3.72-1.54,4.16-3.51,2.07-9.28,5.67-18.09,10.69-26.17,1.82-2.95,3.84-5.8,6.01-8.48,2.88-3.55,6.07-6.89,9.5-9.92,.6-.53,1.2-1.05,1.81-1.57,1.41,12.78,1.02,25.66-1.18,38.38-.25,1.42,.2,2.87,1.21,3.9,.85,.88,2.02,1.37,3.23,1.37,.21,0,.42-.01,.64-.04,6.37-.91,12.86-1.37,19.29-1.37,1.78,0,3.58,.04,5.35,.1,.06,0,.12,0,.18,0,1.49,0,2.89-.74,3.73-1.98,7.23-10.71,18.42-18.21,30.9-20.98-5.44,12.08-8.26,25.25-8.21,38.55,0,1.42,.68,2.76,1.82,3.6,.78,.58,1.72,.88,2.68,.88,.44,0,.87-.06,1.3-.19,13.96-4.21,31.75-9.42,48.95-14.47,7.4-2.17,14.92-4.37,22.18-6.51-3.39,2.28-6.86,4.58-10.3,6.86-11.92,7.92-24.26,16.1-32.79,22.93-.92,.76-2.25,1.82-3.59,2.88-1.39,1.1-2.79,2.2-3.69,2.95l-3.06,2.43c-1.05,.83-1.67,2.09-1.7,3.43-.03,1.34,.54,2.62,1.56,3.5,1.66,1.43,3.35,2.81,5.06,4.13-1.26,11.36-.92,22.8,1.03,34.07,.1,.56,.3,1.11,.6,1.59,0,0,4.8,7.8,7.13,11.66,6.8,11.29,14.58,22.11,23.15,32.13,.04,.05,.09,.1,.13,.15,.95,1.02,1.89,2.01,2.79,2.97,9.85,10.45,15.81,16.76,16.42,31.45,0,6.22-3.94,13.14-7.74,19.82-1.35,2.38-2.74,4.82-3.95,7.24-2.57,.24-5.16,.36-7.72,.36h0Z"/><path className="cls-2" d="M196.37,17.96c.37,9.31-.24,18.65-1.84,27.9-.49,2.84,.41,5.74,2.41,7.8,1.71,1.76,4.04,2.73,6.46,2.73,.42,0,.85-.03,1.27-.09,6.16-.88,12.44-1.32,18.66-1.32,1.72,0,3.46,.03,5.18,.1,.12,0,.24,0,.35,0,2.98,0,5.78-1.48,7.46-3.96,4.87-7.21,11.7-12.82,19.52-16.27-3.37,10.07-5.1,20.66-5.06,31.34,0,2.84,1.36,5.51,3.64,7.2,1.57,1.16,3.45,1.77,5.36,1.77,.87,0,1.74-.13,2.6-.38,12.31-3.71,27.61-8.21,42.85-12.68-7.06,4.8-13.67,9.47-18.92,13.67-.05,.04-.09,.08-.14,.11-.78,.65-2.13,1.72-3.44,2.75-1.42,1.12-2.77,2.19-3.73,2.98l-3.03,2.4c-2.1,1.67-3.35,4.18-3.4,6.86-.05,2.68,1.09,5.25,3.12,7,1.08,.93,2.17,1.84,3.28,2.73-1,10.95-.56,21.97,1.32,32.83,.2,1.13,.6,2.21,1.21,3.19,.05,.08,4.82,7.83,7.1,11.61,6.93,11.51,14.86,22.53,23.58,32.74,.08,.1,.17,.2,.26,.29,.96,1.03,1.9,2.02,2.81,2.99,9.42,9.99,14.63,15.51,15.2,28.45-.05,5.02-3.66,11.37-7.15,17.51-.96,1.7-1.95,3.42-2.88,5.17-1.63,.1-3.26,.15-4.88,.15-11.2,0-22.42-2.42-32.64-7.01-13.25-29.78-41.02-51.38-73.33-56.74-3.6-.58-7.92-.88-12.82-.88-5.81,0-12.37,.42-18.4,1.18-20.6-9.98-29.77-21.58-33.86-30.03-.24-3.86-.21-8.44-.19-13.26,.05-9.76,.11-19.82-1.87-28.15,2.28-13.18,6.96-25.6,13.92-37,3.93-.64,7.91-1.07,11.87-1.28,4.04-.21,7.44-3.08,8.32-7.03,1.96-8.79,5.36-17.12,10.13-24.8,1.71-2.77,3.62-5.46,5.67-8,1.28-1.58,2.63-3.12,4.03-4.6M203.55,0c-2.86,1.98-5.6,4.13-8.2,6.44-3.62,3.2-6.97,6.7-10.01,10.46-2.3,2.84-4.42,5.82-6.34,8.94-5.27,8.49-9.08,17.81-11.26,27.56-5.67,.3-11.32,1-16.89,2.12-9.08,13.75-15.09,29.3-17.62,45.58,3.42,11.69,1.32,30.75,2.39,43.26,10.73,24.47,39.78,36.13,41.24,37.03,5.64-.83,12.98-1.46,19.87-1.46,4.1,0,8.04,.22,11.37,.77,30.58,5.07,56.29,25.74,67.82,54.51,12.34,6.17,25.9,9.35,39.6,9.35,3.57,0,7.14-.22,10.71-.65,4.35-9.75,13.24-20.64,13.2-31.36-.73-17.93-9.08-25.23-20.42-37.4-8.43-9.87-16.03-20.42-22.72-31.54-2.34-3.87-7.15-11.69-7.15-11.69-2.02-11.68-2.25-23.59-.68-35.34-2.36-1.74-4.69-3.6-6.9-5.51l3.1-2.47c1.74-1.45,5.51-4.35,7.25-5.8,16.73-13.37,48.06-31.91,64.81-45.29-27.71,8.34-69.28,20.31-96.96,28.65-.05-15.47,3.95-30.69,11.6-44.14-17.16,.91-32.9,9.82-42.52,24.07-1.84-.07-3.69-.11-5.53-.11-6.67,0-13.32,.47-19.93,1.41C206.11,31.71,206.16,15.69,203.55,0h0Z"/></g><path id="Nose" className="cls-1" d="M301.62,217.59c-2.07-1.04-7.98,2.77-7.98,2.77l11.45,7.25,9.36,1.38c-.35-1.48-10.75-10.42-12.82-11.4Z"/><path id="Eye" className="cls-1" d="M223.63,122.29c-6.92-6.18-24.66-6.31-24.66-6.31l13.52,15.61,22.88,7.25s-4.8-10.37-11.74-16.55Z"/></svg>
  </>
)

export const PwnyBanner = (style: React.CSSProperties) => (
  <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1499.96 377.97"><defs><style>{".cls-1{stroke:#3c5;stroke-linejoin:round;stroke-width:4px;}.cls-1,.cls-2{fill:#3c5;}"}</style></defs><g id="Neck_Bot"><path d="m168.81,373.43c-40.5-1.84-79.63-17.36-110.39-43.78-.37-.5-.86-.93-1.42-1.25-.68-.38-1.44-.57-2.19-.57-.82,0-1.64.22-2.36.67l-22.2,13.7c-7.97-6.05-15.47-12.77-22.35-20.03-2.12-14.04-3.26-28.33-3.38-42.54,12.55-2.66,25.39-4,38.22-4,1.7,0,3.42.02,5.13.07,22.76,24.82,53.53,41.16,86.87,46.09.22.03.44.05.66.05,1.42,0,2.77-.67,3.63-1.83l8.45-11.5,42.03-2.87,9.51,5.09c.66.36,1.39.53,2.12.53.79,0,1.58-.21,2.29-.62,8.72-5.15,16.46-11.58,23.06-19.18,8.36,11.34,18.24,21.34,29.49,29.83-25.91,22.31-55.2,39.85-87.16,52.17Z"/><path className="cls-2" d="m42.73,280.13c1.04,0,2.08,0,3.12.03,23.31,24.78,54.49,41.1,88.21,46.08.44.07.88.1,1.32.1,2.84,0,5.54-1.34,7.25-3.67l7.22-9.82,38.66-2.64,8.37,4.48c1.33.71,2.79,1.07,4.25,1.07,1.58,0,3.17-.42,4.57-1.25,7.56-4.46,14.4-9.84,20.46-16.07,6.72,8.46,14.3,16.14,22.68,22.97-24.23,20.1-51.35,36.05-80.77,47.5-39.02-1.99-76.69-16.99-106.4-42.38-.69-.81-1.52-1.5-2.48-2.04-1.36-.76-2.88-1.14-4.39-1.14-1.64,0-3.28.45-4.73,1.34l-19.55,12.06c-6.5-5.11-12.66-10.69-18.39-16.64-1.78-12.16-2.81-24.5-3.07-36.8,11.09-2.11,22.38-3.18,33.67-3.18m0-9c-14.38,0-28.71,1.64-42.73,4.89-.05,16.14,1.17,32.27,3.66,48.22,8.03,8.6,16.85,16.44,26.34,23.4l24.81-15.3v.15c31.98,27.74,72.44,43.78,114.74,45.49,34.42-13.15,66.15-32.48,93.62-57.04-14.32-9.96-26.67-22.48-36.44-36.93-6.98,9.16-15.68,16.89-25.6,22.75l-10.65-5.7-45.4,3.1-9.69,13.19c-33-4.88-63.25-21.18-85.47-46.07-2.39-.09-4.79-.14-7.18-.14h0Z"/></g><g id="Neck_Mid"><path d="m137.57,288.83c-2.44-.33-4.87-.73-7.26-1.19-14.97-2.83-29.26-8.1-42.49-15.65-15.64-8.96-29.21-20.71-40.33-34.9-.87-1.11-2.18-1.72-3.54-1.72-.43,0-.87.06-1.3.19-1.77.54-3.04,2.1-3.19,3.95l-.03.41c-1.1.05-2.19.08-3.28.08-9.8,0-19.56-2.18-28.42-6.34,1.11-7.7,2.48-15.12,4.07-22.11,6.02-3,12.27-5.67,18.6-7.96,1.4-.51,2.47-1.68,2.83-3.13,2.46-9.72,5.45-19.41,8.91-28.84,4.85.14,9.67.82,14.37,2.02,1.11.28,2.21.59,3.29.94.44,2.1.95,4.22,1.55,6.39.11.79.26,1.59.42,2.42l.11.58c1.68,8.84,4.65,17.34,8.82,25.29,0,0,0,0,0,.01.07.2.16.4.25.58,14.02,26.38,40.06,44.5,69.67,48.48.2.03.4.04.6.04,1.13,0,2.24-.43,3.08-1.22l2.7-2.53,38.65-2.62c.21.32,1.23,1.89,1.23,1.89.84,1.29,2.27,2.04,3.77,2.04.33,0,.66-.04.99-.11,4.77-1.08,9.52-2.41,14.17-3.97,1.9,5.71,4.19,11.31,6.84,16.72-5.52,5.01-11.66,9.24-18.32,12.62l-4.45-2.02c-.59-.27-1.22-.4-1.86-.4-.1,0-.2,0-.3.01l-42.88,2.9c-1.32.09-2.54.76-3.32,1.82l-3.93,5.34Z"/><path className="cls-2" d="m45.22,176.29c3.43.28,6.84.85,10.19,1.71.19.05.37.1.56.14.29,1.23.6,2.48.94,3.74.12.82.27,1.6.41,2.35l.11.59c1.74,9.16,4.81,17.99,9.12,26.25.12.3.26.59.41.88,14.7,27.66,42,46.66,73.04,50.83.4.05.8.08,1.2.08,2.27,0,4.47-.86,6.15-2.43l1.53-1.43,34.42-2.33c1.71,2.39,4.45,3.77,7.32,3.77.66,0,1.32-.07,1.99-.22,3.48-.79,6.95-1.7,10.38-2.75,1.24,3.37,2.61,6.69,4.11,9.95-4.01,3.34-8.34,6.27-12.93,8.76l-2.44-1.11c-1.17-.53-2.44-.81-3.72-.81-.2,0-.41,0-.61.02l-42.88,2.9c-2.64.18-5.07,1.51-6.64,3.64l-2.33,3.16c-1.48-.23-2.95-.49-4.4-.76-14.47-2.74-28.3-7.83-41.08-15.13-15.14-8.68-28.27-20.04-39.04-33.77-1.74-2.21-4.37-3.45-7.09-3.45-.86,0-1.74.12-2.59.38-2.29.69-4.16,2.24-5.27,4.25-8,0-15.98-1.58-23.39-4.58.88-5.62,1.89-11.06,3.03-16.28,5.28-2.54,10.71-4.83,16.21-6.82,2.81-1.02,4.93-3.36,5.66-6.26,2.15-8.5,4.71-16.97,7.64-25.27m-5.04-9.21c-.39,0-.78,0-1.17,0-4,10.55-7.39,21.32-10.15,32.26-7.1,2.57-14.02,5.58-20.74,9.01l-.23.13c-2.16,9.12-3.82,18.44-5.06,27.75,10.3,5.44,21.74,8.25,33.32,8.25,2.49,0,4.98-.13,7.47-.39.1-1.42.22-2.79.33-4.24,11.43,14.59,25.57,26.82,41.65,36.03,13.63,7.78,28.46,13.24,43.88,16.16,3.35.64,6.73,1.16,10.15,1.57l5.5-7.47,42.88-2.9,6.38,2.9c8.79-4.19,16.83-9.8,23.78-16.62-3.91-7.5-7.08-15.37-9.47-23.49-5.89,2.2-11.93,3.99-18.06,5.38-.41-.62-2.31-3.57-2.67-4.11l-42.88,2.9-3.87,3.63c-28.24-3.79-52.92-20.97-66.29-46.13v-.07c-.06-.11-.12-.22-.16-.33-4.01-7.59-6.87-15.74-8.47-24.18-.19-1.02-.38-1.96-.51-2.9v-.09c-.81-2.96-1.51-5.93-2.07-8.98-1.99-.75-4.03-1.38-6.09-1.9-5.7-1.45-11.55-2.19-17.42-2.19h0Z"/></g><g id="Neck_Top"><path d="m139.65,231.08c-7.5-3.95-14.53-8.74-20.94-14.28-.99-.86-2.29-2-3.46-3.11-.73-.67-1.28-1.2-1.79-1.72l-1.49-1.49c-17.4-17.73-28.43-41.14-31.04-65.89-.24-2.26-2.13-3.99-4.4-4.03-6.31-.11-12.65-.75-18.86-1.92-3.78-5.09-7.12-10.51-9.97-16.17.48-.78.97-1.56,1.48-2.37l.11-.17c4.7-7.69,10-15.48,15.8-23.23,4.9-1.49,9.91-2.77,14.89-3.82,1.2-.25,2.25-.99,2.9-2.03,8.9-14.31,21.01-26.49,35.25-35.48,1.75,4.86,3.15,9.85,4.19,14.91-.61,1.09-1.19,2.17-1.73,3.24-.85,1.55-1.6,3.12-2.34,4.65-13,27.84-14.92,59.22-5.43,88.39.15.45.36.88.64,1.26,10.16,13.94,23.46,25.71,38.53,34.11.46.45,1.02.81,1.67,1.04l.63.22c.49.17.99.25,1.49.25.23,0,.46-.02.68-.05.41.04,1.96.2,1.96.2,3.59.32,7.18.48,10.72.48h0c11.87,0,23.56-1.72,34.85-5.13-2.48,9.44-3.46,19.28-2.89,29.01-2.15.78-4.34,1.5-6.54,2.14l-2.83-4.38c-.83-1.29-2.26-2.06-3.78-2.06-.1,0-.21,0-.31.01l-41.72,2.9c-1.04.07-2.01.5-2.77,1.21l-3.5,3.29Z"/><path className="cls-2" d="m115.7,62.42c.7,2.37,1.33,4.76,1.86,7.17-.33.62-.66,1.23-.97,1.85-.89,1.63-1.7,3.31-2.41,4.79-.01.03-.03.06-.04.09-13.46,28.83-15.45,61.38-5.61,91.64.29.9.73,1.75,1.29,2.52,10.44,14.32,24.08,26.44,39.53,35.14.81.68,1.76,1.23,2.81,1.6l.28.1c1.12.46,2.32.7,3.53.7.32,0,.63-.02.94-.05.12.01.23.02.35.03l.7.07s.07,0,.11.01c3.67.32,7.39.49,11.07.49,9.78,0,19.43-1.13,28.86-3.36-1.16,6.44-1.68,13-1.53,19.54l-.96-1.49c-1.67-2.57-4.52-4.11-7.55-4.11-.21,0-.42,0-.63.02l-41.72,2.9c-2.07.14-4.03,1-5.54,2.42l-1.12,1.06c-6.15-3.47-11.94-7.55-17.28-12.16-.96-.83-2.2-1.92-3.31-2.98-.04-.04-.09-.08-.13-.12-.6-.54-1.09-1.02-1.55-1.49-.02-.02-.05-.05-.07-.07l-1.42-1.42c-16.7-17.04-27.28-39.48-29.78-63.21-.48-4.52-4.25-7.98-8.8-8.05-5.47-.09-10.96-.61-16.36-1.53-2.71-3.78-5.18-7.75-7.37-11.85.03-.05.07-.11.1-.16l.11-.18s.05-.08.08-.12c4.35-7.12,9.27-14.39,14.64-21.63,4.32-1.27,8.72-2.38,13.1-3.3,2.4-.5,4.5-1.97,5.79-4.06,7.51-12.09,17.42-22.59,29-30.81m4.7-13.64c-16.88,9.57-31.1,23.22-41.34,39.7-5.62,1.18-11.18,2.63-16.68,4.35-5.8,7.67-11.6,16.04-16.89,24.69-1,1.58-1.99,3.13-2.9,4.73,3.45,7.24,7.65,14.1,12.53,20.47,7.03,1.43,14.17,2.21,21.34,2.34,2.73,25.86,14.12,50.04,32.33,68.6l1.45,1.45c.62.64,1.25,1.23,1.91,1.84,1.16,1.1,2.41,2.2,3.61,3.25,7.49,6.47,15.78,11.96,24.66,16.32l5.8-5.45,41.72-2.9,4.63,7.15c4.51-1.17,8.94-2.62,13.27-4.35-1.3-13.28.45-26.67,5.12-39.17-13.38,5.15-27.56,7.78-41.83,7.78-3.42,0-6.85-.15-10.27-.45-1.15-.12-2.26-.22-3.38-.36.1.05.19.13.29.19l.19.07c-.06,0-.13-.03-.19-.07l-.63-.22c.06,0,.12.01.17.01s.12,0,.17-.01c-15.14-8.18-28.26-19.65-38.4-33.55-9.1-27.99-7.24-58.38,5.21-85.05.73-1.51,1.47-3.05,2.26-4.5.78-1.55,1.64-3.1,2.49-4.55-1.45-7.64-3.68-15.11-6.66-22.3h0Z"/></g><g id="Head"><path d="m315.53,240.06c-12.43,0-24.87-2.81-36.09-8.15-12.35-29.2-39.24-50.46-70.59-55.66-3.38-.55-7.45-.83-12.11-.83-6.05,0-12.95.48-19.14,1.31-23.25-10.97-33.25-24.15-37.55-33.52-.31-4.2-.28-9.18-.25-14.44.06-9.85.11-20.01-1.97-27.95,2.43-14.78,7.73-28.64,15.76-41.26,4.75-.87,9.58-1.43,14.39-1.68,2.02-.1,3.72-1.54,4.16-3.51,2.07-9.28,5.67-18.09,10.69-26.17,1.82-2.95,3.84-5.8,6.01-8.48,2.88-3.55,6.07-6.89,9.5-9.92.6-.53,1.2-1.05,1.81-1.57,1.41,12.78,1.02,25.66-1.18,38.38-.25,1.42.2,2.87,1.21,3.9.85.88,2.02,1.37,3.23,1.37.21,0,.42-.01.64-.04,6.37-.91,12.86-1.37,19.29-1.37,1.78,0,3.58.04,5.35.1.06,0,.12,0,.18,0,1.49,0,2.89-.74,3.73-1.98,7.23-10.71,18.42-18.21,30.9-20.98-5.44,12.08-8.26,25.25-8.21,38.55,0,1.42.68,2.76,1.82,3.6.78.58,1.72.88,2.68.88.44,0,.87-.06,1.3-.19,13.96-4.21,31.75-9.42,48.95-14.47,7.4-2.17,14.92-4.37,22.18-6.51-3.39,2.28-6.86,4.58-10.3,6.86-11.92,7.92-24.26,16.1-32.79,22.93-.92.76-2.25,1.82-3.59,2.88-1.39,1.1-2.79,2.2-3.69,2.95l-3.06,2.43c-1.05.83-1.67,2.09-1.7,3.43-.03,1.34.54,2.62,1.56,3.5,1.66,1.43,3.35,2.81,5.06,4.13-1.26,11.36-.92,22.8,1.03,34.07.1.56.3,1.11.6,1.59,0,0,4.8,7.8,7.13,11.66,6.8,11.29,14.58,22.11,23.15,32.13.04.05.09.1.13.15.95,1.02,1.89,2.01,2.79,2.97,9.85,10.45,15.81,16.76,16.42,31.45,0,6.22-3.94,13.14-7.74,19.82-1.35,2.38-2.74,4.82-3.95,7.24-2.57.24-5.16.36-7.72.36h0Z"/><path className="cls-2" d="m196.37,17.96c.37,9.31-.24,18.65-1.84,27.9-.49,2.84.41,5.74,2.41,7.8,1.71,1.76,4.04,2.73,6.46,2.73.42,0,.85-.03,1.27-.09,6.16-.88,12.44-1.32,18.66-1.32,1.72,0,3.46.03,5.18.1.12,0,.24,0,.35,0,2.98,0,5.78-1.48,7.46-3.96,4.87-7.21,11.7-12.82,19.52-16.27-3.37,10.07-5.1,20.66-5.06,31.34,0,2.84,1.36,5.51,3.64,7.2,1.57,1.16,3.45,1.77,5.36,1.77.87,0,1.74-.13,2.6-.38,12.31-3.71,27.61-8.21,42.85-12.68-7.06,4.8-13.67,9.47-18.92,13.67-.05.04-.09.08-.14.11-.78.65-2.13,1.72-3.44,2.75-1.42,1.12-2.77,2.19-3.73,2.98l-3.03,2.4c-2.1,1.67-3.35,4.18-3.4,6.86-.05,2.68,1.09,5.25,3.12,7,1.08.93,2.17,1.84,3.28,2.73-1,10.95-.56,21.97,1.32,32.83.2,1.13.6,2.21,1.21,3.19.05.08,4.82,7.83,7.1,11.61,6.93,11.51,14.86,22.53,23.58,32.74.08.1.17.2.26.29.96,1.03,1.9,2.02,2.81,2.99,9.42,9.99,14.63,15.51,15.2,28.45-.05,5.02-3.66,11.37-7.15,17.51-.96,1.7-1.95,3.42-2.88,5.17-1.63.1-3.26.15-4.88.15-11.2,0-22.42-2.42-32.64-7.01-13.25-29.78-41.02-51.38-73.33-56.74-3.6-.58-7.92-.88-12.82-.88-5.81,0-12.37.42-18.4,1.18-20.6-9.98-29.77-21.58-33.86-30.03-.24-3.86-.21-8.44-.19-13.26.05-9.76.11-19.82-1.87-28.15,2.28-13.18,6.96-25.6,13.92-37,3.93-.64,7.91-1.07,11.87-1.28,4.04-.21,7.44-3.08,8.32-7.03,1.96-8.79,5.36-17.12,10.13-24.8,1.71-2.77,3.62-5.46,5.67-8,1.28-1.58,2.63-3.12,4.03-4.6M203.55,0c-2.86,1.98-5.6,4.13-8.2,6.44-3.62,3.2-6.97,6.7-10.01,10.46-2.3,2.84-4.42,5.82-6.34,8.94-5.27,8.49-9.08,17.81-11.26,27.56-5.67.3-11.32,1-16.89,2.12-9.08,13.75-15.09,29.3-17.62,45.58,3.42,11.69,1.32,30.75,2.39,43.26,10.73,24.47,39.78,36.13,41.24,37.03,5.64-.83,12.98-1.46,19.87-1.46,4.1,0,8.04.22,11.37.77,30.58,5.07,56.29,25.74,67.82,54.51,12.34,6.17,25.9,9.35,39.6,9.35,3.57,0,7.14-.22,10.71-.65,4.35-9.75,13.24-20.64,13.2-31.36-.73-17.93-9.08-25.23-20.42-37.4-8.43-9.87-16.03-20.42-22.72-31.54-2.34-3.87-7.15-11.69-7.15-11.69-2.02-11.68-2.25-23.59-.68-35.34-2.36-1.74-4.69-3.6-6.9-5.51l3.1-2.47c1.74-1.45,5.51-4.35,7.25-5.8,16.73-13.37,48.06-31.91,64.81-45.29-27.71,8.34-69.28,20.31-96.96,28.65-.05-15.47,3.95-30.69,11.6-44.14-17.16.91-32.9,9.82-42.52,24.07-1.84-.07-3.69-.11-5.53-.11-6.67,0-13.32.47-19.93,1.41,2.71-15.68,2.76-31.7.15-47.39h0Z"/></g><path id="Nose" className="cls-1" d="m301.62,217.59c-2.07-1.04-7.98,2.77-7.98,2.77l11.45,7.25,9.36,1.38c-.35-1.48-10.75-10.42-12.82-11.4Z"/><path id="Eye" className="cls-1" d="m223.63,122.29c-6.92-6.18-24.66-6.31-24.66-6.31l13.52,15.61,22.88,7.25s-4.8-10.37-11.74-16.55Z"/><g id="SIGPwny"><path className="cls-2" d="m404.81,224.1h38.91c0,11.44,4.1,20.14,12.29,26.11,7,5.12,16.38,7.68,28.16,7.68,9.22,0,16.9-1.45,23.04-4.35,8.36-3.92,12.54-10.07,12.54-18.43,0-10.41-9.39-18.26-28.16-23.55-32.43-9.22-49.92-14.5-52.48-15.87-18.78-9.04-28.16-23.3-28.16-42.75,0-17.58,7.25-31.49,21.76-41.73,12.97-9.04,28.5-13.57,46.59-13.57,20.99,0,37.97,4.52,50.94,13.57,14.85,10.41,22.27,25.52,22.27,45.31h-38.91c-1.02-18.43-13.06-27.65-36.1-27.65-7.34,0-13.57,1.54-18.69,4.61-5.98,3.76-8.96,9.13-8.96,16.13s3.33,11.52,9.98,14.59c5.12,2.39,19.97,6.74,44.54,13.06,14.34,3.58,25,7.68,32,12.29,14.85,9.56,22.27,23.21,22.27,40.96s-6.49,31.4-19.46,41.98c-13.66,11.1-32.51,16.64-56.58,16.64-22.02,0-40.11-5.2-54.27-15.62-15.87-11.78-23.72-28.24-23.55-49.41Z"/><path className="cls-2" d="m582.47,284.78V101.99h40.19v182.78h-40.19Z"/><path className="cls-2" d="m794.18,284.78l-4.1-20.74c-12.97,16.73-29.7,25.09-50.18,25.09-27.48,0-49.5-9.22-66.05-27.65-15.87-17.58-23.81-40.02-23.81-67.33s7.94-50.86,23.81-68.61c16.38-18.6,38.4-27.9,66.05-27.9,19.62,0,36.61,5.55,50.94,16.64,15.36,11.95,24.06,27.9,26.11,47.87h-38.4c-2.22-9.9-6.78-17.49-13.7-22.78-6.91-5.29-15.23-7.94-24.96-7.94-16.9,0-29.7,6.49-38.4,19.46-7.51,11.1-11.26,25.52-11.26,43.26s3.75,31.06,11.26,41.98c8.87,12.8,21.67,19.2,38.4,19.2,26.62,0,41.13-13.14,43.52-39.42h-40.45v-29.95h76.8v98.82h-25.6Z"/><path className="cls-2" d="m852.29,284.78V101.99h82.43c21.33,0,37.54,6.06,48.64,18.18,9.73,10.41,14.59,23.9,14.59,40.45s-4.86,30.04-14.59,40.45c-11.1,12.12-27.31,18.18-48.64,18.18h-42.24v65.54h-40.19Zm40.19-151.55v54.78h31.23c10.92,0,19.11-1.62,24.58-4.86,7.17-4.44,10.75-11.94,10.75-22.53s-3.58-18.09-10.75-22.53c-5.46-3.24-13.66-4.86-24.58-4.86h-31.23Z"/><path className="cls-2" d="m1212.22,152.42l-41.73,132.35h-37.38l-23.55-88.83h-.51l-22.53,88.83h-37.63l-41.98-132.35h38.4l24.32,89.86h.51l22.02-89.86h35.33l22.53,89.6h.51l24.32-89.6h37.38Z"/><path className="cls-2" d="m1227.58,284.78v-132.35h34.56v18.43h.77c9.04-14.68,22.53-22.02,40.45-22.02s31.14,4.95,38.66,14.85c6.48,8.54,9.73,21.76,9.73,39.68v81.41h-36.35v-74.75c0-21.67-7.77-32.51-23.3-32.51-9.9,0-17.07,2.99-21.5,8.96-4.44,5.98-6.66,15.62-6.66,28.93v69.38h-36.35Z"/><path className="cls-2" d="m1499.96,152.42l-55.3,148.99c-3.93,10.75-9.39,18.43-16.38,23.04-7,4.61-16.73,6.91-29.18,6.91-6.66,0-14.08-.43-22.27-1.28v-29.95c12.8,1.02,19.88,1.45,21.25,1.28,9.38-.68,14.08-6.23,14.08-16.64,0-2.9-.51-5.63-1.54-8.19l-46.59-124.16h38.91l29.95,90.62h.51l28.93-90.62h37.63Z"/></g></svg>
)