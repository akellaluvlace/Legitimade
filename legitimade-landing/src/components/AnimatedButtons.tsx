'use client';

import React, { useMemo } from 'react';
import { styled } from '@mui/material/styles';

type CommonBtnProps = {
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  label: string;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
};

type GradientTriple = [string, string, string];

const DEFAULT_GRADIENT: GradientTriple = ['#0f0c29', '#302b63', '#24243e'];

/* --- Rocket icon path (your SVG) --- */
const ROCKET_PATH =
  'M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z';



/* =========================================================
   1) LaunchFilledButton – gradient filled + rocket animation
   ========================================================= */
export function LaunchFilledButton({
  onClick,
  label,
  className,
  disabled,
  ariaLabel = 'Launch',
  gradient = DEFAULT_GRADIENT,
}: CommonBtnProps & { gradient?: GradientTriple }) {
  const [g1, g2, g3] = gradient;

  const Root = useMemo(
    () =>
      styled('button')(({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        fontFamily: 'inherit',
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: 17,
        padding: '12px 24px',
        minWidth: '220px',
        height: '48px',
        boxSizing: 'border-box',
        color: '#fff',
        background: `linear-gradient(to right, ${g1}, ${g2}, ${g3})`,
        border: 'none',
        letterSpacing: '0.05em',
        borderRadius: 16,
        position: 'relative',
        outline: 'none',
        transition: 'filter 200ms ease',

        '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },

        '& .icon': {
          display: 'inline-block',
          marginRight: 3,
          transform: 'rotate(30deg)',
          transition: 'transform 0.5s cubic-bezier(0.76,0,0.24,1)',
        },
        '& .label': {
          display: 'inline-block',
          transition: 'transform 0.5s cubic-bezier(0.76,0,0.24,1)',
        },

        // Hover behavior - always use hover, not auto-animation
        '&:hover .icon, &:focus .icon': {
          transform: 'translateX(5px) rotate(90deg)',
        },
        '&:hover .label, &:focus .label': {
          transform: 'translateX(7px)',
        },
      })),
    [g1, g2, g3]
  );

  return (
    <Root
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      <span className="icon" aria-hidden>
        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d={ROCKET_PATH} fill="currentColor" />
        </svg>
      </span>
      <span className="label">{label}</span>
    </Root>
  );
}

/* =========================================================
   2) FillWipeButton – outline that fills with gradient
   ========================================================= */
export function FillWipeButton({
  onClick,
  label,
  className,
  disabled,
  ariaLabel = 'Continue',
  gradient = DEFAULT_GRADIENT,
  outlineColor,
}: CommonBtnProps & { gradient?: GradientTriple; outlineColor?: string }) {
  const [g1, g2, g3] = gradient;

  const Root = useMemo(
    () =>
      styled('button')(({
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        fontFamily: 'inherit',
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: 17,
        padding: '12px 24px',
        minWidth: '220px',
        height: '48px',
        boxSizing: 'border-box',
        borderRadius: 16,
        border: `2px solid ${outlineColor ?? '#6b6b8a'}`,
        color: outlineColor ?? '#6b6b8a',
        background: 'transparent',
        overflow: 'hidden',
        transition: 'color 260ms ease',
        outline: 'none',

        '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },

        // Fill layer
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: 14, // slightly smaller to avoid bleed under border
          background: `linear-gradient(to right, ${g1}, ${g2}, ${g3})`,
          transformOrigin: 'left center',
          transform: 'scaleX(0)',
          zIndex: 0,
          transition: 'transform 500ms ease',
        },

        '& .label': { position: 'relative', zIndex: 1 },

        // Hover/focus behavior
        '&:hover::before, &:focus::before': { 
          transform: 'scaleX(1)',
        },
        '&:hover, &:focus': { 
          color: '#fff',
        },
      })),
    [g1, g2, g3, outlineColor]
  );

  return (
    <Root
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      <span className="label">{label}</span>
    </Root>
  );
}