import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProjectItem {
  name: string;
  tagline: string;
  description: string;
  link: string;
  image: string;
}