/**
 * Unified Type Definitions for Portfolio
 * Single source of truth for all interfaces across the application
 * Ensures consistency and makes future Light Mode migration seamless
 */

import React from 'react';

// ============================================================================
// CORE PROFILE TYPES
// ============================================================================

export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  resumeUrl: string;
  currentWork: string;
}

// ============================================================================
// SOCIAL MEDIA TYPES
// ============================================================================

export type IconName =
  | 'github'
  | 'linkedin'
  | 'codeforces'
  | 'leetcode'
  | 'facebook'
  | 'twitter'
  | 'whatsapp'
  | 'discord'
  | 'email';

export interface IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export type IconComponent = React.ComponentType<IconProps>;

export interface SocialLink {
  name: IconName;
  label: string;
  href: string;
  icon: IconComponent;
}

// ============================================================================
// PROJECT TYPES
// ============================================================================

export type ProjectCategory = 'complete-projects' | 'small-projects';

export interface ProjectButton {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  techs: string[];
  buttons: ProjectButton[];
  category: ProjectCategory;
}

// ============================================================================
// BLOG TYPES
// ============================================================================

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  href: string;
}

// ============================================================================
// SKILLS TYPES
// ============================================================================

export interface SkillCategory {
  category: string;
  skills: string[];
}

// ============================================================================
// ABOUT SECTION TYPES
// ============================================================================

export interface AboutContent {
  heading: string;
  paragraphs: string[];
  funFacts: string[];
}

// ============================================================================
// HERO SECTION TYPES
// ============================================================================

export interface HeroContent {
  headline: string;
  typeWriterSequence: Array<string | number>;
  subtitle: string;
  ctaText: string;
  resumeText: string;
  statusText: string;
  quote: string;
  quoteAttribution: string;
}

// ============================================================================
// CONTACT SECTION TYPES
// ============================================================================

export interface ContactContent {
  heading: string;
  subheading: string;
  description: string;
  formTitle: string;
  formLabels: {
    name: string;
    email: string;
    message: string;
  };
  formPlaceholders: {
    name: string;
    email: string;
    message: string;
  };
  formErrorMessages: {
    nameTooShort: string;
    invalidEmail: string;
    messageTooShort: string;
    networkError: string;
    serverError: string;
  };
  successMessage: string;
  mediaHeading: string;
  messageHeading: string;
}

// ============================================================================
// FORM TYPES
// ============================================================================

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export interface FormData {
  name: string;
  email: string;
  message: string;
}
