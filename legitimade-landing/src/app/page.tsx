'use client';

// pages/HomePage.tsx
import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  GlobalStyles,
  Button,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MeetTheMakers, { defaultMakers } from '../components/MeetTheMakers';
import { LaunchFilledButton, FillWipeButton } from '../components/AnimatedButtons';
import type { Theme, SxProps } from '@mui/material/styles';

const keyframes = `
  @keyframes floating {
    0% { transform: translateY(0px); }
    50% { transform: translateY(10px); }
    100% { transform: translateY(0px); }
  }
  @keyframes sweepY {
    0% { transform: translateY(-25%); opacity: .85; }
    50% { transform: translateY(25%); opacity: 1; }
    100% { transform: translateY(-25%); opacity: .85; }
  }
`;

// deterministic "random"
const r = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};
const orbVars = (seed: number): SxProps<Theme> => {
  const aSize = Math.round(110 + r(seed + 1) * 70); // 110-180px
  const bSize = Math.round(70 + r(seed + 2) * 80);  // 70-150px
  const aLeftPct = Math.round(8 + r(seed + 3) * 74); // 8%-82%
  const aTopPct = Math.round(-12 + r(seed + 4) * 32); // -12%-20%
  const bLeftPct = Math.round(4 + r(seed + 5) * 84); // 4%-88%
  const bBottomPct = Math.round(r(seed + 6) * 28); // 0%-28%
  const aDelay = Math.round(-1200 + r(seed + 7) * 2400);
  const bDelay = Math.round(-1800 + r(seed + 8) * 2400);

  // CSS vars consumed by ::before/::after in theme overrides
  return {
    ['--orbA-size' as any]: `${aSize}px`,
    ['--orbA-left' as any]: `${aLeftPct}%`,
    ['--orbA-top' as any]: `${aTopPct}%`,
    ['--orbA-delay' as any]: `${aDelay}ms`,
    ['--orbB-size' as any]: `${bSize}px`,
    ['--orbB-left' as any]: `${bLeftPct}%`,
    ['--orbB-bottom' as any]: `${bBottomPct}%`,
    ['--orbB-delay' as any]: `${bDelay}ms`,
  };
};

const HomePage = () => {
  return (
    <>
      <GlobalStyles styles={keyframes} />
      <Box sx={{
        background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.9) 0%, rgba(26, 26, 46, 0.8) 100%)',
        minHeight: { xs: 'auto', md: '100vh' },
        pt: { xs: 12, md: 0 },
        pb: { xs: 8, md: 0 },
        display: { xs: 'block', md: 'flex' },
        alignItems: { md: 'center' },
        position: 'relative',
        overflow: 'hidden',
      }}>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 800,
              fontSize: { xs: '3.2rem', md: '4.5rem' },
              position: 'relative',
              zIndex: 3,
              mb: { xs: 12, md: 16 },
              transform: 'translateY(-78px)',
              background: 'linear-gradient(45deg, #26c6da, #4dd0e1, #00bcd4) !important',
              WebkitBackgroundClip: 'text !important',
              WebkitTextFillColor: 'transparent !important',
              backgroundClip: 'text !important',
              color: 'transparent !important',
            }}
          >
            LegitimaDe – Authenticity You Can Trust
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{
              fontSize: { xs: '1.0rem', md: '1.3rem' },
              lineHeight: 1.6,
              maxWidth: '800px',
              mx: 'auto',
              position: 'relative',
              zIndex: 3,
              mb: 3,
              textShadow: '0 1px 6px rgba(0, 0, 0, 0.5)',
            }}
          >
            Bridge everyday QR code scanning with blockchain security to verify product authenticity instantly. Each product's identity is anchored on a decentralized, tamper-proof blockchain ledger.
          </Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 2,
            gap: 3,
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            position: 'relative',
            zIndex: 3,
          }}>
            <LaunchFilledButton
              onClick={() => {}}
              label="Get Started"
              gradient={['#26c6da', '#4dd0e1', '#00bcd4']}
            />
            <FillWipeButton
              onClick={() => {}}
              label="Learn More"
              gradient={['#26c6da', '#4dd0e1', '#00bcd4']}
              outlineColor="#4dd0e1"
            />
          </Box>
        </Container>
      </Box>

      <Container sx={{ pt: 8, pb: 1 }} maxWidth="lg">
        {/* Problem framing */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              The Challenge of Counterfeits
            </Typography>

            <Typography variant="body1" color="text.secondary" maxWidth="md" sx={{ mx: 'auto', mb: 4 }}>
              Counterfeit goods pose a critical threat to both brands and consumers. Fake products – from luxury fashion to pharmaceuticals – flood global markets, infringing on IP rights and endangering customers with substandard quality. Recent reports estimate nearly $100 billion in losses from counterfeit luxury items alone. In this environment, building trust is essential: brands and buyers need a reliable way to prove authenticity at the point of purchase.
            </Typography>
          </Box>
        </Box>

        {/* YouTube Video */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <Box
            component="iframe"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            sx={{
              width: { xs: '100%', sm: 560 },
              height: { xs: 200, sm: 315 },
              maxWidth: '100%',
              border: 'none',
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </Box>

        {/* Stats strip */}
        <Box sx={ {mb :4 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Card className="simple-card" sx={{
                minHeight: '200px',
                '&:hover': {
                  border: '1px solid rgba(243, 156, 18, 0.4)',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(243, 156, 18, 0.3)'
                }
              }}>
                <CardContent className="simple-content" sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <TrendingUpIcon className="stats-icon" sx={{ fontSize: 32, color: '#26c6da', mr: 1 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#26c6da' }}>Market Impact</Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }} className="stats-number">$100B+</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>in counterfeit losses</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>Luxury goods alone</Typography>
                    <Typography variant="body2" color="text.secondary">annual global impact</Typography>
                  </Box>
                  <Box sx={{ mt: 'auto', p: 2, backgroundColor: 'rgba(233, 69, 96, 0.1)', borderRadius: 1, border: '1px solid rgba(233, 69, 96, 0.2)' }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.85rem' }}>
                      <strong>Why it matters:</strong> Counterfeit goods threaten brand reputation, consumer safety, and global economies. Blockchain verification stops fakes at the source.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Card className="simple-card" sx={{
                minHeight: '200px',
                '&:hover': {
                  border: '1px solid rgba(233, 69, 96, 0.4)',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(233, 69, 96, 0.3)'
                }
              }}>
                <CardContent className="simple-content" sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <TrendingDownIcon className="stats-icon" sx={{ fontSize: 32, color: '#4dd0e1', mr: 1 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#4dd0e1' }}>Trust Gap</Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }} className="stats-number">65%</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>of consumers worry about fakes</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>Growing concern</Typography>
                    <Typography variant="body2" color="text.secondary">across all product categories</Typography>
                  </Box>
                  <Box sx={{ mt: 'auto', p: 2, backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: 1, border: '1px solid rgba(243, 156, 18, 0.2)' }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.85rem' }}>
                      <strong>Why it matters:</strong> Consumer confidence is eroding. A transparent, verifiable system restores trust between brands and buyers.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Card className="simple-card" sx={{
                minHeight: '200px',
                '&:hover': {
                  border: '1px solid rgba(243, 156, 18, 0.4)',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(243, 156, 18, 0.3)'
                }
              }}>
                <CardContent className="simple-content" sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <ScheduleIcon className="stats-icon" sx={{ fontSize: 32, color: '#26c6da', mr: 1 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#26c6da' }}>Instant Verification</Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }} className="stats-number">&lt;3 sec</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>average scan time</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>Real-time results</Typography>
                    <Typography variant="body2" color="text.secondary">powered by blockchain</Typography>
                  </Box>
                  <Box sx={{ mt: 'auto', p: 2, backgroundColor: 'rgba(233, 69, 96, 0.1)', borderRadius: 1, border: '1px solid rgba(233, 69, 96, 0.2)' }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.85rem' }}>
                      <strong>Why it matters:</strong> Speed is critical at the point of purchase. Our blockchain-backed QR verification delivers instant trust without delays.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Section divider */}
      <Box className="section-divider" />

      <Container sx={{ pt: 4, pb: 8 }} maxWidth="xl">

        {/* Process */}
        <Box sx={{ py: 1, px: { xs: 0, md: 4 } }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              How It Works
            </Typography>

            <Typography variant="body1" color="text.secondary" maxWidth="md" sx={{ mx: 'auto', mb: 4 }}>
              LegitimaDe combines familiar QR code technology with blockchain security. Simply scan, verify, and get instant confirmation of authenticity.
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 2, md: 2 }
          }}>
            {/* Step 1 */}
            <Box sx={{ flex: { xs: '1 1 auto', md: '0 1 320px' }, maxWidth: { xs: '100%', md: '320px' }, width: { xs: '100%', md: 'auto' } }}>
              <Card className="green-border-card" sx={{ height: { md: '400px' }, ...orbVars(201) }}>
                <CardContent className="green-border-content" sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    mb: 2,
                    width: '100%',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                      animation: 'shimmer 2s infinite',
                    },
                    '@keyframes shimmer': {
                      '0%': { left: '-100%' },
                      '100%': { left: '100%' },
                    },
                  }}>
                    <Typography variant="h6" component="h3" sx={{ fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.2 }}>
                      1. Scan
                    </Typography>
                  </Box>
                  <Box sx={{
                    flex: 1,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.4, textAlign: 'center' }}>
                      Use your smartphone to scan the QR code on any product. LegitimaDe then retrieves the associated blockchain record and verifies it.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>

            {/* Step 2 */}
            <Box sx={{ flex: { xs: '1 1 auto', md: '0 1 320px' }, maxWidth: { xs: '100%', md: '320px' }, width: { xs: '100%', md: 'auto' } }}>
              <Card className="blue-border-card" sx={{ height: { md: '400px' }, ...orbVars(202) }}>
                <CardContent className="blue-border-content" sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    mb: 2,
                    width: '100%',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                      animation: 'shimmer 2s infinite',
                    },
                    '@keyframes shimmer': {
                      '0%': { left: '-100%' },
                      '100%': { left: '100%' },
                    },
                  }}>
                    <Typography variant="h6" component="h3" sx={{ fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.2 }}>
                      2. Verify
                    </Typography>
                  </Box>
                  <Box sx={{
                    flex: 1,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.4, textAlign: 'center' }}>
                      The app compares the scanned code with the blockchain ledger. Because blockchain data is decentralized and immutable, any mismatch or tampering is instantly detected.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>

            {/* Step 3 */}
            <Box sx={{ flex: { xs: '1 1 auto', md: '0 1 320px' }, maxWidth: { xs: '100%', md: '320px' }, width: { xs: '100%', md: 'auto' } }}>
              <Card className="green-border-card" sx={{ height: { md: '400px' }, ...orbVars(203) }}>
                <CardContent className="green-border-content" sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    mb: 2,
                    width: '100%',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                      animation: 'shimmer 2s infinite',
                    },
                    '@keyframes shimmer': {
                      '0%': { left: '-100%' },
                      '100%': { left: '100%' },
                    },
                  }}>
                    <Typography variant="h6" component="h3" sx={{ fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.2 }}>
                      3. Result
                    </Typography>
                  </Box>
                  <Box sx={{
                    flex: 1,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.4, textAlign: 'center' }}>
                      If the record matches, LegitimaDe shows a green checkmark and "Product is Genuine" message; otherwise it flags the item. This instant verification requires no central database—just the trust of the blockchain.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>

        {/* Why different */}
        <Box sx={{ py: 8, px: { xs: 0, md: 4 } }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 600, mb: 4 }}>
            For Brands & Consumers
          </Typography>

          <Typography variant="body1" color="text.secondary" maxWidth="md" sx={{ mx: 'auto', textAlign: 'center', mb: 6 }}>
            LegitimaDe serves both sides of the marketplace. Brands protect their reputation while consumers gain confidence in every purchase.
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              {
                title: 'Brand Protection',
                description: 'LegitimaDe offers the highest level of brand protection via blockchain-backed verification. By embedding each product\'s identity on an immutable ledger, brands curb counterfeit sales and retain customer trust.',
                cardClass: 'green-border-card',
                contentClass: 'green-border-content',
              },
              {
                title: 'Consumer Confidence',
                description: 'Shoppers gain confidence and transparency. With a quick scan, they see proof of authenticity and product provenance, enabling informed buying decisions.',
                cardClass: 'blue-border-card',
                contentClass: 'blue-border-content',
              },
              {
                title: 'Decentralized Trust',
                description: 'The combination of QR codes and blockchain means anyone can verify genuineness without relying on a central authority. Trust is built into the system itself.',
                cardClass: 'green-border-card',
                contentClass: 'green-border-content',
              },
              {
                title: 'Tamper-Proof Records',
                description: 'Each product\'s identity is anchored on a decentralized, tamper-proof blockchain ledger, so any attempt to falsify or alter the record is immediately detected.',
                cardClass: 'blue-border-card',
                contentClass: 'blue-border-content',
              },
            ].map((item, i) => {
              return (
              <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card className={item.cardClass} sx={{ height: { md: '400px' }, ...orbVars(301 + i) }}>
                  <CardContent className={item.contentClass} sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      mb: 2,
                      width: '100%',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                        animation: 'shimmer 2s infinite',
                      },
                      '@keyframes shimmer': {
                        '0%': { left: '-100%' },
                        '100%': { left: '100%' },
                      },
                    }}>
                      <Typography variant="h6" component="h3" sx={{ fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.2 }}>
                        {item.title}
                      </Typography>
                    </Box>
                    <Box sx={{
                      flex: 1,
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 0, 0, 0.25)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.4, textAlign: 'center' }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )})}
          </Grid>
        </Box>

        {/* Section divider */}
        <Box className="section-divider" />

        {/* Guardrails */}
        <Box sx={{ pt: 4, pb: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
              Built on Trust (Security & Privacy)
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Your security and privacy are our top priorities. LegitimaDe is designed with multiple layers of protection.
            </Typography>
            <Box sx={{ textAlign: 'left', maxWidth: 'md', mx: 'auto' }}>
              <Typography sx={{ mb: 1.5 }}>
                • <strong>Immutable Blockchain Records:</strong> Once data is written to the blockchain, it cannot be altered or deleted, ensuring product histories remain trustworthy.
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                • <strong>End-to-End Encryption:</strong> All communication between your device and our servers is encrypted, protecting your data from interception.
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                • <strong>Minimal Data Collection:</strong> We only collect the information necessary to verify products. Your personal shopping habits remain private.
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                • <strong>Decentralized Architecture:</strong> No single point of failure means the system is resilient against attacks and outages.
              </Typography>
              <Typography>
                • <strong>Regular Security Audits:</strong> Our platform undergoes continuous security reviews to identify and address potential vulnerabilities.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Skeptics' Q&A */}
        <Box sx={{ pt: 4, pb: 8 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              Frequently Asked Questions
            </Typography>

            <Typography variant="body1" color="text.secondary" maxWidth="md" sx={{ mx: 'auto', mb: 4 }}>
              Have questions about how LegitimaDe works? Here are answers to some common concerns.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              {
                title: 'What if someone copies the QR code?',
                body: 'Each QR code is linked to a unique blockchain record. If someone copies a QR code, the blockchain will show that product has already been registered or verified elsewhere, flagging the duplicate as suspicious.',
                color: '#ab47bc',
              },
              {
                title: 'Do I need special equipment?',
                body: 'No special equipment needed! LegitimaDe works with any smartphone that can scan QR codes. Simply download our app or use your phone\'s camera to verify products instantly.',
                color: '#9c27b0',
              },
              {
                title: 'How much does it cost?',
                body: 'For consumers, verification is completely free. Brands pay a small fee to register products on the blockchain, ensuring sustainable operations while keeping the service accessible to everyone.',
                color: '#8e24aa',
              },
            ].map((q) => (
              <Grid key={q.title} size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    height: '100%',
                    p: { xs: 2, sm: 2.5 },
                    background: `linear-gradient(135deg, ${q.color}18, ${q.color}08)`,
                    border: `1px solid ${q.color}40`,
                    borderRadius: 2,
                    borderLeft: `4px solid ${q.color}`,
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      borderColor: `${q.color}80`,
                      boxShadow: `0 4px 15px ${q.color}40`,
                    }
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: q.color,
                      mb: 2,
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word'
                    }}
                  >
                    {q.title}
                  </Typography>
                  <Typography
                    sx={{
                      lineHeight: 1.6,
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: { xs: '0.85rem', sm: '0.95rem' },
                      flex: 1,
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word'
                    }}
                  >
                    {q.body}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Social Proof */}
        <Box sx={{ pt: 0, pb: 6 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              What Our Users Say
            </Typography>

            <Typography variant="body1" color="text.secondary" maxWidth="md" sx={{ mx: 'auto', mb: 4 }}>
              Real feedback from brands and consumers who trust LegitimaDe to protect their products and purchases.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              { quote: '"LegitimaDe gave our brand 100% confidence in product authenticity."', role: 'Alex Brand, CEO of FashionCo' },
              { quote: '"I scan every purchase and know it\'s real – finally trust in what I buy!"', role: 'Jamie Consumer, Verified Shopper' },
              { quote: '"The peace of mind knowing our customers can verify authenticity is priceless."', role: 'Brand Partner' },
            ].map((s, i) => (
              <Grid key={i} size={{ xs: 12, md: 4 }}>
                <Card className="simple-card" sx={{ height: '100%', textAlign: 'center' }}>
                  <CardContent className="simple-content" sx={{ p: 3 }}>
                    <Typography sx={{ fontStyle: 'italic', mb: 1 }}>{s.quote}</Typography>
                    <Typography color="text.secondary">— {s.role}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Section divider */}
        <Box className="section-divider" />

        {/* Makers / Team */}
        <Box sx={{ pt: 4, pb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 600 }}>
            Meet the Team
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth="md" sx={{ mx: 'auto', mb: 6, textAlign: 'center' }}>
            Our team is built on the idea that blockchain's immutable ledger makes it virtually impossible to alter the information once it's stored. We are a visionary group of developers, designers, and supply chain experts dedicated to eliminating counterfeits and protecting brands and consumers.
          </Typography>
          <Box sx={{ px: { xs: 2, md: 0 }, overflow: 'hidden' }}>
            <MeetTheMakers members={defaultMakers} cardWidth={280} cardHeight={320} speedSec={15} reverse={true} />
          </Box>
        </Box>

        {/* Final CTA */}
        <Box sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            Ready to Verify Authenticity?
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth="md" sx={{ mx: 'auto', mb: 6 }}>
            Join thousands of brands and consumers who trust LegitimaDe for instant, blockchain-powered product verification. Get started today and never worry about counterfeits again.
          </Typography>
          <LaunchFilledButton
            onClick={() => {}}
            label="Start Verifying Now"
            gradient={['#26c6da', '#4dd0e1', '#ff6b35']}
          />
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
