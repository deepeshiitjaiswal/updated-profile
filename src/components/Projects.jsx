import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description: "Automated AWS infrastructure deployment using Terraform and Ansible, reducing deployment time by 70%",
      tags: ["AWS", "Terraform", "Ansible"],
      github: "https://github.com/yourusername/cloud-infra",
      demo: ""
    },
    {
      title: "Kubernetes Cluster Management",
      description: "Implemented EKS cluster with auto-scaling and monitoring, improving resource utilization by 40%",
      tags: ["Kubernetes", "AWS", "Prometheus"],
      github: "https://github.com/yourusername/k8s-management",
      demo: ""
    },
    {
      title: "CI/CD Pipeline Optimization",
      description: "Developed Jenkins pipelines for microservices, reducing deployment failures by 60%",
      tags: ["Jenkins", "Docker", "GitOps"],
      github: "https://github.com/yourusername/cicd-pipeline",
      demo: ""
    },
    {
      title: "Multi-Cloud Migration",
      description: "Led migration of applications across AWS, Azure, and GCP, ensuring 99.9% uptime",
      tags: ["AWS", "Azure", "GCP"],
      github: "https://github.com/yourusername/multi-cloud",
      demo: ""
    },
    {
      title: "Monitoring & Alerting System",
      description: "Implemented ELK stack and Grafana dashboards for real-time monitoring",
      tags: ["ELK", "Grafana", "Prometheus"],
      github: "https://github.com/yourusername/monitoring",
      demo: ""
    },
    {
      title: "Container Security Framework",
      description: "Developed security scanning pipeline for Docker images, identifying vulnerabilities pre-deployment",
      tags: ["Docker", "Security", "CI/CD"],
      github: "https://github.com/yourusername/container-security",
      demo: ""
    },
    {
      title: "Infrastructure Cost Optimization",
      description: "Implemented cloud cost optimization strategies, reducing monthly costs by 35%",
      tags: ["AWS", "Cost", "Terraform"],
      github: "https://github.com/yourusername/cost-opt",
      demo: ""
    },
    {
      title: "Serverless Application Platform",
      description: "Built serverless architecture using AWS Lambda and API Gateway",
      tags: ["AWS Lambda", "Serverless", "API"],
      github: "https://github.com/yourusername/serverless",
      demo: ""
    },
    {
      title: "Database Migration Automation",
      description: "Automated database migration process with zero downtime",
      tags: ["Python", "AWS RDS", "Automation"],
      github: "https://github.com/yourusername/db-migration",
      demo: ""
    },
    {
      title: "High Availability Setup",
      description: "Designed and implemented HA architecture across multiple regions",
      tags: ["AWS", "HA", "DR"],
      github: "https://github.com/yourusername/ha-setup",
      demo: ""
    },
    {
      title: "Log Analytics Platform",
      description: "Created centralized logging solution using ELK stack",
      tags: ["ELK", "Python", "Analytics"],
      github: "https://github.com/yourusername/log-analytics",
      demo: ""
    },
    {
      title: "Auto-scaling Framework",
      description: "Implemented intelligent auto-scaling for microservices",
      tags: ["Kubernetes", "Metrics", "Automation"],
      github: "https://github.com/yourusername/auto-scaling",
      demo: ""
    },
    {
      title: "GitOps Implementation",
      description: "Set up GitOps workflow using ArgoCD and Helm",
      tags: ["GitOps", "ArgoCD", "Helm"],
      github: "https://github.com/yourusername/gitops",
      demo: ""
    },
    {
      title: "Backup & Recovery System",
      description: "Developed automated backup and recovery solution",
      tags: ["AWS", "Python", "Automation"],
      github: "https://github.com/yourusername/backup-system",
      demo: ""
    },
    {
      title: "Service Mesh Implementation",
      description: "Implemented Istio service mesh for microservices",
      tags: ["Istio", "Kubernetes", "Microservices"],
      github: "https://github.com/yourusername/service-mesh",
      demo: ""
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of my most impactful DevOps and cloud infrastructure projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
                      >
                        <FaGithub className="w-6 h-6" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
