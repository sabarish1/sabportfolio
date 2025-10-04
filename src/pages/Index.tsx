import Navigation from '@/components/Navigation';
import Particles from '@/components/Particles';
import ShuffleText from '@/components/animations/ShuffleText';
import ShinyText from '@/components/animations/ShinyText';
import EncryptedText from '@/components/animations/EncryptedText';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import profilePicture from '@/assets/profile-picture.jpeg';
import skillsBg from '@/assets/skills-bg.jpg';
import awardsBg from '@/assets/awards-bg.jpg';
import { Code, Briefcase, GraduationCap, Award, Mail, Phone, Linkedin,FileDown } from 'lucide-react';

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section id="header" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Particles particleColors={['#ffffff', '#D4AF37']} particleCount={150} speed={0.3} />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gold-glow">
            <span className="text-gold">
              <ShuffleText text="Sabarish R" />
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-muted-foreground">
            UI/UX Developer
          </p>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            4 years of experience in creating exceptional user experiences
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => {
              const element = document.getElementById('about');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore My Work
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-4 md:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gold">ABOUT ME</h2>
            <ShinyText text="Me In a Nutshell" className="text-xl" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={100}>
            <div className="space-y-6">
                <EncryptedText 
                  text="Hey there, I'm Sabarish R" 
                  className="text-3xl font-semibold"
                />
              <div className="space-y-4 text-lg">
                <p className="text-muted-foreground">
                  An enthusiastic developer with 4 years of experience as a Senior System Engineer seeking roles to utilize my in-depth knowledge of UI/UX development to create exceptional user experiences and passionate about staying updated with emerging trends.
                </p>
              </div>
              <div className="space-y-3 mt-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold" />
                  <a href="tel:+918825727010" className="text-lg hover:text-gold transition-colors">
                    +91 8825727010
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold" />
                  <a href="mailto:sabarish1631@gmail.com" className="text-lg hover:text-gold transition-colors">
                    sabarish1631@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-gold" />
                  <a href="https://www.linkedin.com/in/connectsabarishr/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gold transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gold via-gold-glow to-gold rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                  <img 
                    src={profilePicture} 
                    alt="Sabarish R - UI/UX Developer"
                    className="relative rounded-2xl w-full max-w-md shadow-2xl"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative min-h-screen py-20 px-4 md:px-8">
        <div className="absolute inset-0 z-0">
          <img src={skillsBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gold">SKILLS</h2>
            <ShinyText text="My Technical Expertise" className="text-xl" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
            <Card className="p-8 bg-card border-border card-hover">
              <div className="flex items-center gap-4 mb-6">
                <Code className="w-8 h-8 text-gold" />
                  <EncryptedText text="Frontend Technologies" className="text-2xl font-bold" />
              </div>
              <div className="flex flex-wrap gap-3">
                {['AngularJS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS', 'Bootstrap', 'React.js', 'JIRA'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
            <Card className="p-8 bg-card border-border card-hover">
              <div className="flex items-center gap-4 mb-6">
                <Code className="w-8 h-8 text-gold" />
                  <EncryptedText text="Backend Development" className="text-2xl font-bold" delay={100} />
              </div>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Postman', 'AWS Lambda', 'API Gateway', 'SQL', 'PostgreSQL', 'Redis', 'Github', 'Bedrock Prompt'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="min-h-screen py-20 px-4 md:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gold">WORK EXPERIENCE</h2>
            <ShinyText text="My Professional Journey" className="text-xl" />
          </div>
          
          <ScrollReveal>
          <Card className="p-8 bg-card border-border">
            <div className="flex items-start gap-4 mb-4">
              <Briefcase className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <EncryptedText text="Senior System Engineer" className="text-2xl font-bold" />
                  <span className="text-muted-foreground">September 2021 – Present</span>
                </div>
                <p className="text-xl text-gold mb-4">Infosys, Chennai, India</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Gained 4 years of experience developing UI designs and features using HTML5, CSS, and TypeScript</li>
                  <li>• Implemented responsive designs and ensured cross-browser compatibility for different screen sizes</li>
                  <li>• Utilized frameworks like AngularJS to build complex web applications</li>
                  <li>• Understood client requirements and designed tailored solutions</li>
                  <li>• Optimized websites for performance across devices</li>
                  <li>• Wrote high-quality, scalable, and reusable code</li>
                  <li>• Collaborated with back-end developers to integrate UI components with APIs and databases</li>
                  <li>• Debugged errors, resolved issues, and conducted routine performance optimizations</li>
                  <li>• Possess basic understanding of Java and Spring Boot for seamless frontend-backend collaboration</li>
                </ul>
              </div>
            </div>
          </Card>
          </ScrollReveal>
        </div>
      </section>

     

    

      {/* Awards & Certifications Section */}
      <section id="awards" className="relative py-20 px-4 md:px-8">
        <div className="absolute inset-0 z-0">
          <img src={awardsBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gold">AWARDS & CERTIFICATIONS</h2>
            <ShinyText text="Recognition & Achievements" className="text-xl" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
            <Card className="p-8 bg-card border-border card-hover">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <EncryptedText text="Stellar Awards - Game Changer" className="text-xl font-bold" />
                    <span className="text-muted-foreground text-sm">Nov 2024</span>
                  </div>
                  <p className="text-gold mb-2">Infosys, Chennai, India</p>
                  <p className="text-muted-foreground">Received this award in recognition of strong team performance</p>
                </div>
              </div>
            </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
            <Card className="p-8 bg-card border-border card-hover">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <EncryptedText text="Full Stack Web Developer" className="text-xl font-bold" delay={100} />
                    <span className="text-muted-foreground text-sm">Sep 2021</span>
                  </div>
                  <p className="text-gold mb-2">Crampete, Chennai, India</p>
                  <p className="text-muted-foreground">Certification in full stack web development</p>
                </div>
              </div>
            </Card>
	     </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <ScrollReveal delay={100}>
            <Card className="p-8 bg-card border-border card-hover">
              <div className="flex items-start gap-4">
              <GraduationCap className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <EncryptedText text="Prompt Engineering and LLM" className="text-xl font-bold" />
                    <span className="text-muted-foreground text-sm">May 2025</span>
                  </div>
                  <p className="text-gold mb-2">Infosys, Chennai, India</p>
                  <p className="text-muted-foreground">Certification in Prompt Engineering and LLMs with Langchain</p>
                </div>
              </div>
            </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
            <Card className="p-8 bg-card border-border card-hover">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <EncryptedText text="Generative AI" className="text-xl font-bold" delay={100} />
                    <span className="text-muted-foreground text-sm">Dec 2023</span>
                  </div>
                  <p className="text-gold mb-2">Infosys, Chennai, India</p>
                  <p className="text-muted-foreground">Infosys Certified Generative AI Capsule course</p>
                </div>
              </div>
            </Card>
	     </ScrollReveal>
          </div>
        </div>
      </section>
      {/* Education Section */}
  <section id="education" className="py-20 px-4 md:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gold">EDUCATION</h2>
            <ShinyText text="Academic Background" className="text-xl" />
          </div>
          
          <ScrollReveal>
          <Card className="p-8 bg-card border-border">
            <div className="flex items-start gap-4">
              <GraduationCap className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <EncryptedText text="Bachelor of Engineering in Computer Science" className="text-2xl font-bold" />
                  <span className="text-muted-foreground">Jun 2015 – May 2019</span>
                </div>
                <p className="text-xl text-gold mb-2">Panimalar Engineering College, Chennai, India</p>
              </div>
            </div>
          </Card>
          </ScrollReveal>
        </div>
      </section>
  
    {/* socials Section */}
      <section id="socials" className="min-h-screen py-20 px-4">
       <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gold">SOCIALS</h2>
            <ShinyText text="Let's Connect" className="text-xl" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          

            <Card 
              className="p-8 bg-card border-border card-hover cursor-pointer flex items-center justify-center min-h-[200px]"
              onClick={() => window.open('https://github.com/sabarish1', '_blank')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-20 h-20 fill-gold">
                <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
              </svg>
            </Card>

            <Card 
              className="p-8 bg-card border-border card-hover cursor-pointer flex items-center justify-center min-h-[200px]"
              onClick={() => window.open('https://www.linkedin.com/in/connectsabarishr/', '_blank')}
            >
              <Linkedin className="w-20 h-20 text-gold" />
            </Card>
            <Card 
              className="p-8 bg-card border-border card-hover cursor-pointer flex flex-col items-center justify-center min-h-[200px] gap-3"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/sabarish_CV-2.pdf';
                link.download = 'Sabarish_Resume.pdf';
                link.click();
              }}
            >
              <p className="text-sm text-muted-foreground">Resume</p>
              <FileDown className="w-20 h-20 text-gold" />
              
            </Card>
            <Card 
              className="p-8 bg-card border-border card-hover cursor-pointer flex items-center justify-center min-h-[200px]"
              onClick={() => window.location.href = 'mailto:sabarish1631@gmail.com?subject=Feedback%20on%20the%20Web%20Portfolio'}
            >
              <Mail className="w-20 h-20 text-gold" />
            </Card>
          </div>
        </div>
      </section>
      {/* Copyright Footer */}
      <footer className="py-6 px-4 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            ©This portfolio is officialy made for me by myself
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
