/**
 * Fluent UI Icons
 * Original source: https://github.com/microsoft/fluentui-system-icons
 * MIT License
 */
import React from "react";

interface SvgProps {
  style?: React.SVGAttributes<SVGElement>;
  children?: React.ReactNode;
}

export const SvgWrapper = ({style, children}: SvgProps) => (
  <svg
    width="1.25em"
    height="1.25em"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...style}
  >
    {children}
  </svg>
);

export const CalendarRegular = (style: React.SVGAttributes<SVGElement>) => (
  <SvgWrapper style={style}>
    <path d="M5.24848 8.99696C5.66186 8.99696 5.99696 8.66186 5.99696 8.24848C5.99696 7.83511 5.66186 7.5 5.24848 7.5C4.83511 7.5 4.5 7.83511 4.5 8.24848C4.5 8.66186 4.83511 8.99696 5.24848 8.99696ZM5.99696 10.7485C5.99696 11.1619 5.66186 11.497 5.24848 11.497C4.83511 11.497 4.5 11.1619 4.5 10.7485C4.5 10.3351 4.83511 10 5.24848 10C5.66186 10 5.99696 10.3351 5.99696 10.7485ZM8.00043 8.99696C8.41381 8.99696 8.74892 8.66186 8.74892 8.24848C8.74892 7.83511 8.41381 7.5 8.00043 7.5C7.58706 7.5 7.25195 7.83511 7.25195 8.24848C7.25195 8.66186 7.58706 8.99696 8.00043 8.99696ZM8.74892 10.7485C8.74892 11.1619 8.41381 11.497 8.00043 11.497C7.58706 11.497 7.25195 11.1619 7.25195 10.7485C7.25195 10.3351 7.58706 10 8.00043 10C8.41381 10 8.74892 10.3351 8.74892 10.7485ZM10.7485 8.99696C11.1619 8.99696 11.497 8.66186 11.497 8.24848C11.497 7.83511 11.1619 7.5 10.7485 7.5C10.3351 7.5 10 7.83511 10 8.24848C10 8.66186 10.3351 8.99696 10.7485 8.99696ZM14 4.5C14 3.11929 12.8807 2 11.5 2H4.5C3.11929 2 2 3.11929 2 4.5V11.5C2 12.8807 3.11929 14 4.5 14H11.5C12.8807 14 14 12.8807 14 11.5V4.5ZM3 6H13V11.5C13 12.3284 12.3284 13 11.5 13H4.5C3.67157 13 3 12.3284 3 11.5V6ZM4.5 3H11.5C12.3284 3 13 3.67157 13 4.5V5H3V4.5C3 3.67157 3.67157 3 4.5 3Z" />
  </SvgWrapper>
);

export const ChevronCircleLeftRegular = (style: React.SVGAttributes<SVGElement>) => (
  <SvgWrapper style={style}>
    <path d="M8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8C13 10.7614 10.7614 13 8 13ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8ZM8.64645 5.14645L6.14645 7.64645C5.95118 7.84171 5.95118 8.15829 6.14645 8.35355L8.64645 10.8536C8.84171 11.0488 9.15829 11.0488 9.35355 10.8536C9.54882 10.6583 9.54882 10.3417 9.35355 10.1464L7.20711 8L9.35355 5.85355C9.54882 5.65829 9.54882 5.34171 9.35355 5.14645C9.15829 4.95118 8.84171 4.95118 8.64645 5.14645Z" />
  </SvgWrapper>
);

export const ChevronCircleRightRegular = (style: React.SVGAttributes<SVGElement>) => (
  <SvgWrapper style={style}>
    <path d="M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM7.35355 5.14645L9.85355 7.64645C10.0488 7.84171 10.0488 8.15829 9.85355 8.35355L7.35355 10.8536C7.15829 11.0488 6.84171 11.0488 6.64645 10.8536C6.45118 10.6583 6.45118 10.3417 6.64645 10.1464L8.79289 8L6.64645 5.85355C6.45118 5.65829 6.45118 5.34171 6.64645 5.14645C6.84171 4.95118 7.15829 4.95118 7.35355 5.14645Z" />
  </SvgWrapper>
);

export const ChevronRightRegular = (style: React.SVGAttributes<SVGElement>) => (
  <SvgWrapper style={style}>
    <path d="M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z" />
  </SvgWrapper>
);

export const ClockRegular = (style: React.SVGAttributes<SVGElement>) => (
  <SvgWrapper style={style}>
    <path d="M8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2ZM8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3ZM7.50153 5C7.74699 5 7.95114 5.17688 7.99347 5.41012L8.00153 5.5V8H9.5C9.77614 8 10 8.22386 10 8.5C10 8.74546 9.82312 8.94961 9.58988 8.99194L9.5 9H7.50153C7.25607 9 7.05192 8.82312 7.00958 8.58988L7.00153 8.5V5.5C7.00153 5.22386 7.22538 5 7.50153 5Z" />
  </SvgWrapper>
);

export const LiveRegular = (style: React.SVGAttributes<SVGElement>) => (
  <svg
    width="1.25em"
    height="1.25em"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...style}
  >
    <path d="M4.35281 4.33368C4.53936 4.14776 4.83968 4.15785 5.02591 4.34409C5.22983 4.548 5.21706 4.88095 5.01461 5.08633C3.76882 6.35014 3 8.08538 3 10.0002C3 11.9903 3.83047 13.7864 5.16377 15.0609C5.37638 15.2642 5.39483 15.6054 5.18685 15.8133C5.00478 15.9954 4.71256 16.0094 4.52487 15.8331C2.97073 14.3738 2 12.3003 2 10.0002C2 7.78613 2.89942 5.78215 4.35281 4.33368ZM14.9854 5.08633C14.7829 4.88095 14.7702 4.548 14.9741 4.34409C15.1603 4.15785 15.4606 4.14776 15.6472 4.33368C17.1006 5.78215 18 7.78613 18 10.0002C18 12.3003 17.0293 14.3738 15.4751 15.8331C15.2874 16.0094 14.9952 15.9954 14.8132 15.8133C14.6052 15.6054 14.6236 15.2642 14.8362 15.0609C16.1695 13.7864 17 11.9903 17 10.0002C17 8.08538 16.2312 6.35014 14.9854 5.08633ZM6.13159 6.09039C6.31407 5.90982 6.60608 5.92412 6.78761 6.10565C6.99573 6.31377 6.97537 6.65519 6.7704 6.8664C5.98409 7.67664 5.5 8.78181 5.5 10C5.5 11.2906 6.04324 12.4542 6.91351 13.2747C7.13387 13.4825 7.16356 13.8365 6.9494 14.0506C6.77419 14.2259 6.49437 14.2454 6.31064 14.0791C5.19861 13.0728 4.5 11.618 4.5 10C4.5 8.47077 5.12414 7.08728 6.13159 6.09039ZM13.2296 6.8664C13.0246 6.65519 13.0043 6.31377 13.2124 6.10565C13.3939 5.92412 13.6859 5.90982 13.8684 6.09039C14.8759 7.08728 15.5 8.47077 15.5 10C15.5 11.618 14.8014 13.0728 13.6894 14.0791C13.5056 14.2454 13.2258 14.2259 13.0506 14.0506C12.8364 13.8365 12.8661 13.4825 13.0865 13.2747C13.9568 12.4542 14.5 11.2906 14.5 10C14.5 8.78181 14.0159 7.67664 13.2296 6.8664ZM10 8.75009C9.30964 8.75009 8.75 9.30974 8.75 10.0001C8.75 10.6904 9.30964 11.2501 10 11.2501C10.6904 11.2501 11.25 10.6904 11.25 10.0001C11.25 9.30974 10.6904 8.75009 10 8.75009Z" />
  </svg>
);

export const LocationRegular = (style: React.SVGAttributes<SVGElement>) => (
  <SvgWrapper style={style}>
    <path d="M9.5 7C9.5 6.17157 8.82843 5.5 8 5.5C7.17157 5.5 6.5 6.17157 6.5 7C6.5 7.82843 7.17157 8.5 8 8.5C8.82843 8.5 9.5 7.82843 9.5 7ZM14 7C14 9.8739 10.9028 13.0162 9.15886 14.5577C8.4905 15.1485 7.5095 15.1485 6.84114 14.5577C5.09724 13.0162 2 9.8739 2 7C2 3.68629 4.68629 1 8 1C11.3137 1 14 3.68629 14 7ZM13 7C13 4.23858 10.7614 2 8 2C5.23858 2 3 4.23858 3 7C3 8.10846 3.61464 9.39535 4.56972 10.6827C5.50366 11.9415 6.65694 13.0602 7.50343 13.8085C7.79356 14.065 8.20644 14.065 8.49657 13.8085C9.34306 13.0602 10.4963 11.9415 11.4303 10.6827C12.3854 9.39535 13 8.10846 13 7Z" />
  </SvgWrapper>
);

export const OpenRegular = (style: React.SVGAttributes<SVGElement>) => (
  <SvgWrapper style={style}>
    <path d="M4.49999 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.49999 13H11.5C12.3284 13 12.9999 12.3284 12.9999 11.5V9.26923C12.9999 8.99309 13.2238 8.76923 13.4999 8.76923C13.7761 8.76923 13.9999 8.99309 13.9999 9.26923V11.5C13.9999 12.8807 12.8807 14 11.5 14H4.49999C3.11928 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11928 2 4.49999 2H6.73075C7.00689 2 7.23074 2.22386 7.23074 2.5C7.23074 2.77614 7.00689 3 6.73075 3H4.49999ZM8.76926 2.5C8.76926 2.22386 8.99311 2 9.26925 2H13.5C13.7761 2 14 2.22386 14 2.5V6.73077C14 7.00691 13.7761 7.23077 13.5 7.23077C13.2239 7.23077 13 7.00691 13 6.73077V3.70711L9.6228 7.08433C9.42754 7.27959 9.11096 7.27959 8.9157 7.08433C8.72044 6.88906 8.72044 6.57248 8.9157 6.37722L12.2929 3H9.26925C8.99311 3 8.76926 2.77614 8.76926 2.5Z" />
  </SvgWrapper>
);