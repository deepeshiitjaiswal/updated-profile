import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiDocker, 
  SiKubernetes, 
  SiAmazonaws, 
  SiTerraform, 
  SiJenkins, 
  SiGit,
  SiLinux,
  SiPython,
  SiAnsible,
  SiGrafana,
  SiPrometheus,
  SiElasticsearch,
  SiJira,
  SiConfluence,
  SiMicrosoftazure,
  SiGooglecloud
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
    { name: 'AWS', icon: SiAmazonaws, color: '#FF9900' },
    { name: 'Azure', icon: SiMicrosoftazure, color: '#0089D6' },
    { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
    { name: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
    { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Linux', icon: SiLinux, color: '#FCC624' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Ansible', icon: SiAnsible, color: '#EE0000' },
    { name: 'Grafana', icon: SiGrafana, color: '#F46800' },
    { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C' },
    { name: 'Elasticsearch', icon: SiElasticsearch, color: '#005571' },
    { name: 'Jira', icon: SiJira, color: '#0052CC' },
    { name: 'Confluence', icon: SiConfluence, color: '#172B4D' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Expertise in modern DevOps tools and cloud platforms, enabling efficient deployment and management of scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-700 rounded-lg p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <skill.icon 
                  className="w-12 h-12 mb-4 transition-colors duration-300"
                  style={{ color: skill.color }}
                />
                <h3 className="text-sm font-medium text-gray-800 dark:text-white text-center">
                  {skill.name}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Cloud & Infrastructure
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• AWS, Azure, and GCP</li>
              <li>• Infrastructure as Code (IaC)</li>
              <li>• Container Orchestration</li>
              <li>• High Availability Architecture</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              CI/CD & Automation
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Jenkins Pipelines</li>
              <li>• GitOps Workflows</li>
              <li>• Infrastructure Automation</li>
              <li>• Configuration Management</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Monitoring & Operations
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• ELK Stack</li>
              <li>• Prometheus & Grafana</li>
              <li>• Log Management</li>
              <li>• Performance Optimization</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
