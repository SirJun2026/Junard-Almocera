import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Instagram, Linkedin, Send, CheckCircle, Smile } from 'lucide-react';
import { initAuth, googleSignIn, uploadToGoogleDrive, logout } from '../lib/firebase';
import { User } from 'firebase/auth';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Branding',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [googleUser, setGoogleUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [driveError, setDriveError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = initAuth(
      (user, token) => {
        setGoogleUser(user);
        setAccessToken(token);
      },
      () => {
        setGoogleUser(null);
        setAccessToken(null);
      }
    );
    return () => unsubscribe();
  }, []);

  const projectTypes = ['Branding', 'Packaging', 'Illustration', 'UI/UX Design', 'Other'];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name!';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email!';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email!';
    }
    if (!formData.message.trim()) newErrors.message = 'Please type a little message!';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setDriveError(null);

    try {
      let currentToken = accessToken;

      // If not logged in, sign in first
      if (!currentToken) {
        const result = await googleSignIn();
        if (result) {
          setGoogleUser(result.user);
          setAccessToken(result.accessToken);
          currentToken = result.accessToken;
        } else {
          throw new Error('Google Sign-in was cancelled or failed.');
        }
      }

      // Generate text file content
      const timestamp = new Date().toLocaleString();
      const fileContent = `PORTFOLIO CONTACT INQUIRY\n` +
        `==========================\n` +
        `Submitted At: ${timestamp}\n\n` +
        `--- CLIENT DETAILS ---\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Interested In: ${formData.projectType}\n\n` +
        `--- BRIEF MESSAGE ---\n` +
        `${formData.message}\n\n` +
        `==========================\n` +
        `Sent via Junard's Portfolio Website.`;

      const safeName = formData.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      const filename = `inquiry_${safeName}_${Date.now()}.txt`;

      // Upload to Google Drive
      await uploadToGoogleDrive(currentToken, filename, fileContent);

      // Format the email subject and body
      const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} - from ${formData.name}`);
      const emailBody = encodeURIComponent(
        `Hello Junard,\n\n` +
        `You have received a new project inquiry from your portfolio website.\n\n` +
        `--- CLIENT DETAILS ---\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Interested in: ${formData.projectType}\n\n` +
        `--- MESSAGE ---\n` +
        `${formData.message}\n\n` +
        `Best regards,\n` +
        `${formData.name}`
      );

      // Construct the mailto link
      const mailtoUrl = `mailto:junard.almocera.gf2020@gmail.com?subject=${subject}&body=${emailBody}`;

      // Open the client's email application
      window.location.href = mailtoUrl;

      // Complete on UI
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        projectType: 'Branding',
        message: '',
      });
    } catch (error: any) {
      console.error('Submission failed:', error);
      setDriveError(error.message || 'Failed to submit form to Google Drive.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on write
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 bg-brand-cream border-t-2 border-brand-charcoal relative overflow-hidden"
    >
      {/* Decorative Grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(var(--color-brand-charcoal) 2px, transparent 2px)',
        backgroundSize: '16px 16px'
      }} />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Info (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-brand-charcoal">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-coral bg-brand-coral/10 px-3.5 py-1.5 rounded-full border border-brand-coral/30">
                Let's Make Stuff!
              </span>
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[0.95] text-brand-charcoal mt-4 mb-6">
                Start a <br />
                <span className="text-brand-coral">Conversation.</span>
              </h2>
              <p className="font-sans text-brand-charcoal/80 text-lg leading-relaxed max-w-md">
                Have an exciting project, a cheeky packaging concept, or just want to swap favorite typeface names? Shoot me a message—I would love to help bring your ideas to life.
              </p>
            </div>

            {/* Core Contact Details Cards */}
            <div className="space-y-4">
              {/* Email */}
              <a
                id="contact-email-link"
                href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNsLqMQGdDnxvzpvSTRwPJDLqhBTvxzbHHqKkRXDtTjTSGRVSwmGLPPFpHgfSVnjQwKwwg"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white border-2 border-brand-charcoal p-4 rounded-xl hover:bg-brand-yellow/10 hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-coral/15 border border-brand-coral flex items-center justify-center text-brand-coral group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase font-bold text-brand-charcoal/50 block">Direct Email</span>
                  <span className="font-sans text-sm font-bold text-brand-charcoal">junard.almocera.gf2020@gmail.com</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                id="contact-instagram-link"
                href="https://www.instagram.com/junardalmocera/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 bg-white border-2 border-brand-charcoal p-4 rounded-xl hover:bg-brand-yellow/10 hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-teal/15 border border-brand-teal flex items-center justify-center text-brand-teal group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase font-bold text-brand-charcoal/50 block">Creative Log</span>
                  <span className="font-sans text-sm font-bold text-brand-charcoal">@junard.almocera</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                id="contact-linkedin-link"
                href="https://www.linkedin.com/in/junard-almocera-19271727a/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 bg-white border-2 border-brand-charcoal p-4 rounded-xl hover:bg-brand-yellow/10 hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-lavender/40 border border-brand-lavender flex items-center justify-center text-brand-charcoal group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase font-bold text-brand-charcoal/50 block">Professional Network</span>
                  <span className="font-sans text-sm font-bold text-brand-charcoal">linkedin.com/in/junard-almocera</span>
                </div>
              </a>
            </div>

            {/* Custom Interactive Stamp sticker */}
            <div className="relative pt-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="relative w-28 h-28 bg-brand-yellow rounded-full border-3 border-brand-charcoal flex items-center justify-center text-brand-charcoal shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
              >
                <div className="absolute inset-1.5 border border-dashed border-brand-charcoal/40 rounded-full" />
                <Smile className="w-10 h-10 fill-brand-cream text-brand-charcoal" />
                <span className="absolute inset-0 flex items-center justify-center font-mono text-[7px] font-black uppercase tracking-wider text-center p-2 leading-none pointer-events-none">
                  ✦ SERIOUSLY FUN DESIGN ✦ SERIOUSLY FUN DESIGN
                </span>
              </motion.div>
            </div>
          </div>

          {/* Column 2: Form (7 Columns) */}
          <div className="lg:col-span-7 bg-white border-4 border-brand-charcoal p-6 md:p-10 rounded-2xl shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] relative">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  id="designer-contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Row 1: Name */}
                  <div className="space-y-2">
                    <label htmlFor="name-input" className="font-display font-bold text-sm text-brand-charcoal block">
                      My Name is *
                    </label>
                    <input
                      type="text"
                      id="name-input"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your lovely name"
                      className={`w-full bg-brand-cream border-2 rounded-xl px-4 py-3 text-brand-charcoal font-sans text-base outline-none transition-all ${
                        errors.name
                          ? 'border-brand-coral focus:ring-2 focus:ring-brand-coral/25'
                          : 'border-brand-charcoal/25 focus:border-brand-charcoal'
                      }`}
                    />
                    {errors.name && (
                      <span className="font-mono text-xs text-brand-coral font-bold block">{errors.name}</span>
                    )}
                  </div>

                  {/* Row 2: Email */}
                  <div className="space-y-2">
                    <label htmlFor="email-input" className="font-display font-bold text-sm text-brand-charcoal block">
                      Reach me at *
                    </label>
                    <input
                      type="email"
                      id="email-input"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="hello@example.com"
                      className={`w-full bg-brand-cream border-2 rounded-xl px-4 py-3 text-brand-charcoal font-sans text-base outline-none transition-all ${
                        errors.email
                          ? 'border-brand-coral focus:ring-2 focus:ring-brand-coral/25'
                          : 'border-brand-charcoal/25 focus:border-brand-charcoal'
                      }`}
                    />
                    {errors.email && (
                      <span className="font-mono text-xs text-brand-coral font-bold block">{errors.email}</span>
                    )}
                  </div>

                  {/* Row 3: Project Type Selection */}
                  <div className="space-y-2.5">
                    <label className="font-display font-bold text-sm text-brand-charcoal block">
                      I'm interested in *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => {
                        const isSelected = formData.projectType === type;
                        return (
                          <button
                            type="button"
                            key={type}
                            id={`project-type-${type.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => setFormData((prev) => ({ ...prev, projectType: type }))}
                            className={`px-4 py-2 border-2 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all ${
                              isSelected
                                ? 'bg-brand-coral text-brand-cream border-brand-charcoal shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]'
                                : 'bg-brand-cream text-brand-charcoal border-brand-charcoal/20 hover:border-brand-charcoal'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div className="space-y-2">
                    <label htmlFor="message-input" className="font-display font-bold text-sm text-brand-charcoal block">
                      Tell me details *
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Let me know your goals, timelines, or just drop a friendly hello..."
                      className={`w-full bg-brand-cream border-2 rounded-xl px-4 py-3 text-brand-charcoal font-sans text-base outline-none resize-none transition-all ${
                        errors.message
                          ? 'border-brand-coral focus:ring-2 focus:ring-brand-coral/25'
                          : 'border-brand-charcoal/25 focus:border-brand-charcoal'
                      }`}
                    />
                    {errors.message && (
                      <span className="font-mono text-xs text-brand-coral font-bold block">{errors.message}</span>
                    )}
                  </div>

                  {/* Google Drive Status Indicator */}
                  <div className="flex flex-col gap-2 pt-2 border-t border-brand-charcoal/10">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-1.5">
                        {googleUser ? (
                          <>
                            <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse" />
                            <span className="text-brand-charcoal/70">
                              Connected to Google Drive ({googleUser.email})
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                            <span className="text-brand-charcoal/70">
                              Save brief to Google Drive (sign-in on submit)
                            </span>
                          </>
                        )}
                      </div>
                      {googleUser && (
                        <button
                          type="button"
                          onClick={logout}
                          className="text-brand-coral hover:underline cursor-pointer font-bold"
                        >
                          Disconnect
                        </button>
                      )}
                    </div>

                    {driveError && (
                      <div className="bg-brand-coral/10 border-2 border-brand-coral p-3 rounded-xl text-xs font-mono text-brand-coral font-bold leading-relaxed">
                        ⚠️ Error saving to Drive: {driveError}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    disabled={isSubmitting}
                    className="group w-full relative flex justify-center items-center gap-3 bg-brand-charcoal text-brand-cream font-display font-bold text-lg px-8 py-4 rounded-xl border-2 border-brand-charcoal shadow-[4px_4px_0px_0px_rgba(255,94,91,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                    {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center text-brand-charcoal space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-brand-teal/15 border-3 border-brand-teal flex items-center justify-center text-brand-teal animate-bounce">
                    <CheckCircle className="w-10 h-10 stroke-[2.5]" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display font-black text-3xl">Message Sent!</h3>
                    <p className="font-sans text-brand-charcoal/70 text-base max-w-sm mx-auto leading-relaxed">
                      Thank you so much! Your brief is safely landed. Junard will review this and respond within 24 hours. Let's make magic!
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-brand-cream border-2 border-brand-charcoal px-6 py-2.5 rounded-xl font-display font-bold text-sm hover:bg-brand-yellow transition-all shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
