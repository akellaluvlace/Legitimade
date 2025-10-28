'use client';

import React, { useMemo, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";

// Maker images
import JohannaImg from "../assets/Johanna.png";
import VaibhavImg from "../assets/Vaibhav.jpeg";
import NikitaImg from "../assets/nikita.jpg";

export type MakerSocial =
  | { type: "github" | "twitter" | "instagram" | "youtube" | "linkedin" | "website"; url: string };

export interface Maker {
  id: string;
  name: string;
  role: string;
  imageUrl?: string;
  socials?: MakerSocial[];
}

export interface MeetTheMakersProps {
  members: Maker[];
  cardWidth?: number;
  cardHeight?: number;
  speedSec?: number;
  reverse?: boolean;
}

// Pre-configured team list
export const defaultMakers: Maker[] = [
  {
    id: "johanna-herfter",
    name: "Johanna Herfter",
    role: "Co-Founder | Business Development & Strategy – Award-winning business developer (Oracle, Udemy) with a proven record of building multimillion-euro pipelines in tech and cloud. Former key account lead for brands like Disney and Universal. Expert in SaaS growth strategy, and a passionate community builder.",
    imageUrl: JohannaImg,
    socials: [],
  },
  {
    id: "vaibhav-agarwal",
    name: "Dr. Vaibhav Agarwal",
    role: "Founder | Blockchain & Technology Lead – Postdoctoral Blockchain researcher with 12+ years in academia and industry. PhD in NLP, founder of Envossible IT. Led mission-critical projects for Fortune 500 clients. Agile full-stack developer, known for mastering new tech fast.",
    imageUrl: VaibhavImg,
    socials: [],
  },
  {
    id: "nikita-kolesnik",
    name: "Nikita Kolesnik",
    role: "Software Engineer – Full-stack developer specializing in TypeScript, React, Django, and modern web technologies. Passionate about building scalable applications and leveraging AI to solve complex problems.",
    imageUrl: NikitaImg,
    socials: [{ type: "linkedin", url: "https://www.linkedin.com/in/nikita-akella-41b728368/" }],
  },
];

const getSocialIcon = (type: string) => {
  switch (type) {
    case "linkedin": return <LinkedInIcon />;
    case "github": return <GitHubIcon />;
    case "twitter": return <TwitterIcon />;
    case "instagram": return <InstagramIcon />;
    case "youtube": return <YouTubeIcon />;
    case "website": return <LanguageIcon />;
    default: return <LanguageIcon />;
  }
};

const MakerCard: React.FC<{ maker: Maker; width: number; height: number }> = ({ maker, width, height }) => {
  return (
    <Card
      sx={{
        width: width,
        height: height,
        background: "linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 255, 136, 0.05) 100%)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(0, 255, 136, 0.2)",
        borderRadius: 3,
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 40px rgba(0, 255, 136, 0.3)",
          border: "1px solid rgba(0, 255, 136, 0.4)",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          p: 3,
        }}
      >
        <Avatar
          src={maker.imageUrl}
          alt={maker.name}
          sx={{
            width: 100,
            height: 100,
            mb: 2,
            border: "3px solid rgba(0, 255, 136, 0.5)",
            boxShadow: "0 4px 20px rgba(0, 255, 136, 0.3)",
          }}
        />

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#00ff88",
            textAlign: "center",
            mb: 1,
            fontSize: "1.1rem",
          }}
        >
          {maker.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            textAlign: "center",
            mb: 2,
            fontSize: "0.875rem",
            lineHeight: 1.4,
            flex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          {maker.role}
        </Typography>

        {maker.socials && maker.socials.length > 0 && (
          <Box sx={{ display: "flex", gap: 1, mt: "auto" }}>
            {maker.socials.map((social, idx) => (
              <IconButton
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: "#00ff88",
                  "&:hover": {
                    color: "#00ff88",
                    backgroundColor: "rgba(0, 255, 136, 0.1)",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                {getSocialIcon(social.type)}
              </IconButton>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

const MeetTheMakers: React.FC<MeetTheMakersProps> = ({
  members,
  cardWidth = 280,
  cardHeight = 360,
  speedSec = 12,
  reverse = true,
}) => {
  // Simple mobile carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(0);

  // Triple the array for infinite scrolling: [...members, ...members, ...members]
  const tripleMembers = useMemo(() => {
    return [...members, ...members, ...members];
  }, [members]);

  const totalMembers = members.length;
  const startIndex = totalMembers; // Start at middle set

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) < 50) return;

    if (diff > 0) {
      // Swipe left - next
      setCurrentIndex(prev => (prev + 1) % totalMembers);
    } else {
      // Swipe right - previous
      setCurrentIndex(prev => (prev - 1 + totalMembers) % totalMembers);
    }
  };

  const cssVars = useMemo<React.CSSProperties>(
    () => ({
      ["--mtm-width" as any]: `${cardWidth}px`,
      ["--mtm-height" as any]: `${cardHeight}px`,
      ["--mtm-quantity" as any]: totalMembers,
      ["--mtm-speed" as any]: `${speedSec}s`,
      ["--mtm-edge-mask" as any]: `linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)`,
    }),
    [cardWidth, cardHeight, totalMembers, speedSec]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <style>{`
        .mtm-desktop { display: block; }
        .mtm-mobile { display: none; }
        @media (max-width: 768px) {
          .mtm-desktop { display: none; }
          .mtm-mobile { display: block; }
        }

        /* Desktop carousel */
        .mtm-slider {
          width: 100%;
          height: var(--mtm-height);
          overflow: hidden;
          -webkit-mask-image: var(--mtm-edge-mask);
                  mask-image: var(--mtm-edge-mask);
          position: relative;
          padding: 20px 0;
        }

        .mtm-list {
          display: flex;
          width: 100%;
          min-width: calc(var(--mtm-width) * var(--mtm-quantity));
          position: relative;
        }

        .mtm-item {
          width: var(--mtm-width);
          height: var(--mtm-height);
          position: absolute;
          left: 100%;
          animation: mtmAutoRun var(--mtm-speed) linear infinite;
          transition: filter 0.3s ease;
          padding: 0 15px;
          box-sizing: border-box;
        }

        .mtm-item {
          animation-delay: calc( (var(--mtm-speed) / var(--mtm-quantity)) * (var(--mtm-position) - 1) - var(--mtm-speed) );
        }

        .mtm-slider:hover .mtm-item {
          animation-play-state: paused;
        }

        .mtm-slider[data-reverse="true"] .mtm-item { animation-name: mtmReversePlay; }

        @keyframes mtmAutoRun {
          from { left: 100%; }
          to   { left: calc(var(--mtm-width) * -1); }
        }
        @keyframes mtmReversePlay {
          from { left: calc(var(--mtm-width) * -1); }
          to   { left: 100%; }
        }

        /* Mobile carousel - SIMPLE approach */
        .mobile-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .mobile-track {
          display: flex;
          transition: transform 0.4s ease;
          width: ${tripleMembers.length * 100}%;
        }

        .mobile-slide {
          width: ${100 / tripleMembers.length}%;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 20px;
          box-sizing: border-box;
        }
      `}</style>

      {/* Desktop marquee */}
      <Box
        className="mtm-desktop mtm-slider"
        style={cssVars as React.CSSProperties}
        data-reverse={reverse ? "true" : "false"}
        aria-label="Meet the Makers carousel"
      >
        <div className="mtm-list">
          {members.map((m, i) => {
            return (
              <div
                key={m.id}
                className="mtm-item"
                style={{ ["--mtm-position" as any]: i + 1 } as React.CSSProperties}
                aria-roledescription="slide"
                aria-label={`${m.name}, ${m.role}`}
              >
                <MakerCard
                  maker={m}
                  width={cardWidth}
                  height={cardHeight}
                />
              </div>
            );
          })}
        </div>
      </Box>

      {/* Mobile carousel */}
      <Box className="mtm-mobile">
        {/* Indicators */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2, gap: 1 }}>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.875rem',
              fontWeight: 500
            }}
          >
            Swipe for More
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            {members.map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: i === currentIndex ? '#00ff88' : 'rgba(255, 255, 255, 0.3)',
                  transition: 'background-color 0.3s ease',
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Simple working carousel */}
        <Box
          className="mobile-container"
          sx={{ height: cardHeight }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Box
            className="mobile-track"
            sx={{
              transform: `translateX(-${(startIndex + currentIndex) * (100 / tripleMembers.length)}%)`
            }}
          >
            {tripleMembers.map((member, index) => (
              <Box key={`${member.id}-${index}`} className="mobile-slide">
                <MakerCard
                  maker={member}
                  width={cardWidth}
                  height={cardHeight}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MeetTheMakers;
