import { Box, Typography, Stack } from '@mui/material';
import type { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatedBox } from './AnimatedBox';

export interface FullWidthPagePartProps {
  image: string;
  height?: string;
  title?: string;
  // optional override if you ever want to control it manually
  statsVariant?: 'auto' | 'cards' | 'text' | 'none';
}

const FullWidthPagePart: FC<FullWidthPagePartProps> = ({
  image,
  height,
  title = 'Complete Aviation Support',
}) => {
  const { pathname } = useLocation();

  // Normalize trailing slash
  const path = pathname.replace(/\/+$/, '') || '/';

  const isHome = path === '/';
  const isCareersOrContact = path === '/joinus' || path === '/contactus';

  // Decide variant
  const resolvedVariant: 'cards' | 'text' | 'none' = (() => {
    if (isHome) return 'cards';
    if (isCareersOrContact) return 'text';
    return 'text'; // sensible default for other subpages
  })();

  return (
    <AnimatedBox
      style={{
        height: height ?? '80vh',
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Dark overlay */}
      {/* <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.45)',
          zIndex: 1,
        }}
      /> */}

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: { xs: 3, md: 8 },
          maxWidth: '1100px',
        }}
      >
        {resolvedVariant === 'cards' && (
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '1.9rem', sm: '2.2rem', md: '3.1rem' },
              color: 'common.white',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              textShadow: `
              0 0 10px rgba(0,0,0,0.9),
              0 0 22px rgba(0,0,0,0.6)
            `,
              maxWidth: '18ch',
            }}
          >
            {title}
          </Typography>
        )}
      </Box>
    </AnimatedBox>
  );
};

export default FullWidthPagePart;
