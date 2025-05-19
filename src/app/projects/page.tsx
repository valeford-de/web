"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/navigation.module.css';

export default function Projects() {
  // Sample project data - in a real app, this would come from a database or API
  const projects = [
    {
      id: 1,
      name: "GradeTrack",
      description: "Modern solution for tracking academic grades and performance metrics.",
      icon: "/assets/projects/gradetrack-icon.svg", // Replace with actual path
      status: "In Development",
      link: "#"
    },
    {
      id: 2,
      name: "NutriPlan",
      description: "Personalized nutrition planning with AI-powered meal suggestions.",
      icon: "/assets/projects/nutriplan-icon.svg", // Replace with actual path
      status: "Coming Soon",
      link: "#"
    },
    {
      id: 3,
      name: "TaskFlow",
      description: "Minimal task manager designed for focused productivity.",
      icon: "/assets/projects/taskflow-icon.svg", // Replace with actual path
      status: "Live",
      link: "https://taskflow-app.com"
    },
    {
      id: 4,
      name: "MindSpace",
      description: "Meditation and mindfulness app with guided sessions.",
      icon: "/assets/projects/mindspace-icon.svg", // Replace with actual path
      status: "Concept",
      link: "#"
    },
    {
      id: 5,
      name: "WeatherPro",
      description: "Detailed weather forecasts with beautiful visualizations.",
      icon: "/assets/projects/weatherpro-icon.svg", // Replace with actual path
      status: "Planning",
      link: "#"
    },
    {
      id: 6,
      name: "FitSync",
      description: "Fitness tracking that syncs with all your favorite devices.",
      icon: "/assets/projects/fitsync-icon.svg", // Replace with actual path
      status: "Coming Soon",
      link: "#"
    }
  ];

  // Helper function to get badge color based on status
  const getBadgeColor = (status: string) => {
    switch(status) {
      case "Live":
        return "bg-green-50 text-green-600";
      case "In Development":
        return "bg-blue-50 text-blue-600";
      case "Coming Soon":
        return "bg-purple-50 text-purple-600";
      case "Concept":
        return "bg-gray-50 text-gray-600";
      case "Planning":
        return "bg-yellow-50 text-yellow-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  return (
    <div className={`min-h-screen font-[family-name:var(--font-geist-sans)] ${styles.contentPadding}`}>
      {/* Page Header Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Accent line */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "3rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-blue-500 mb-4 mx-auto"
            ></motion.div>
            
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-medium text-4xl sm:text-5xl leading-tight tracking-tight mb-6"
            >
              Our Projects
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-500 text-base md:text-lg mb-12 leading-relaxed"
            >
              A showcase of our iOS apps and projects — from concept to launch.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Projects Grid Section */}
      <section className="w-full bg-white py-10 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 4px 20px -3px rgba(0,0,0,0.05), 0 4px 12px -3px rgba(0,0,0,0.03)",
                  borderColor: "#e5e7eb"
                }}
                className="bg-white p-8 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03),0_2px_8px_-3px_rgba(0,0,0,0.01)] border border-gray-100 transition-all duration-300 ease-in-out relative flex flex-col h-full"
              >
                {/* Project Icon */}
                <div className="mb-5 flex items-center justify-center h-16 w-16 bg-gray-50 rounded-lg">
                  {/* For now using a placeholder, replace with actual icons */}
                  <div className="text-blue-500 text-2xl font-light">
                    {project.name.charAt(0)}
                  </div>
                </div>
                
                {/* Project Name and Status Badge */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-normal text-xl">{project.name}</h3>
                  {project.status && (
                    <span className={`inline-block px-3 py-1 text-xs rounded-full ${getBadgeColor(project.status)}`}>
                      {project.status}
                    </span>
                  )}
                </div>
                
                {/* Project Description */}
                <p className="text-gray-500 text-base leading-relaxed font-light mb-6">
                  {project.description}
                </p>
                
                {/* Project Link - Using mt-auto to push to bottom */}
                <div className="mt-auto">
                  {project.link && project.link !== "#" && (
                    <Link 
                      href={project.link}
                      className="text-blue-500 hover:text-blue-600 text-sm flex items-center transition-colors duration-300"
                    >
                      Visit Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
