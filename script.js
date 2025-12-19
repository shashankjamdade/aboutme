import { GoogleGenAI } from "https://esm.sh/@google/genai@1.34.0";

const RESUME_URL = "https://firebasestorage.googleapis.com/v0/b/recyclemybin-4665c.appspot.com/o/Resume.pdf?alt=media&token=e3b8f5e0-4d5a-4467-a1b3-c93c1870eaf2";
const LINKEDIN_URL = "https://www.linkedin.com/in/shashank-jamdade-a6b19a108/";
const GITHUB_URL = "https://github.com/shashank-jamdade";

const RESUME_DATA = {
  name: "Shashank Jamdade",
  role: "Lead Backend Engineer",
  location: "Bangalore, India",
  bio: "Lead Backend Engineer with 7+ years of experience building scalable, secure and event-driven microservices in fintech and enterprise solutions. Expertise in Java 17/21, Spring Boot 3.x, Kafka, and GenAI systems using LangChain and Llama. Proven track record of handling 50M+ transactions/month and reducing latency by 22%.",
  email: "jshashank388@gmail.com",
  phone: "+91 8454093554",
  skills: [
    { title: "Backend", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`, items: ["Java 17/21", "Spring Boot", "WebFlux", "Spring Security 6", "Kafka", "gRPC", "Hibernate/JPA", "OAuth2/JWT"] },
    { title: "GenAI & LLM", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 16V8h4a4 4 0 0 1 0 8H9Z"/></svg>`, items: ["LangChain", "Llama 3.3", "ChromaDB", "RAG", "Function Calling", "FastAPI", "Vector DBs", "Groq API"] },
    { title: "Cloud & Ops", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`, items: ["AWS (EC2/S3/IAM)", "EKS (Kubernetes)", "Docker", "Jenkins", "GitHub Actions", "Prometheus", "Grafana"] },
    { title: "Mobile & Apps", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.59a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`, items: ["Flutter 3.32", "Android", "iOS", "Kotlin", "Web Development"] },
  ],
  experience: [
    {
      company: "AU small finance bank", role: "Lead Software Developer", period: "11/2020 - Present", location: "Bangalore",
      description: "Driving backend engineering for high-traffic banking microservices.",
      achievements: [
        "Built & optimized 10+ Spring Boot microservices (Gateway, Auth, Customer 360, RM Profile, Notifications, etc.).",
        "Maintained backend systems handling 50–60 million API transactions per month.",
        "Improved API performance by 22% using Redis caching, DB indexing & async patterns.",
        "Reduced system downtime to <1% via circuit breaker + retry + fallback strategies.",
        "Enabled 3x traffic scalability using Kafka + Docker + EKS horizontal autoscaling.",
        "Led and mentored 4–5 backend developers through code reviews and design sessions."
      ]
    },
    {
      company: "Sunday Mobility", role: "Android Developer", period: "09/2017 - 10/2020", location: "Mumbai",
      description: "Delivered high-impact mobile solutions and large-scale applications.",
      achievements: [
        "Delivered large-scale apps including Realme Paysa, Oppo Kash, Remidio & Crowd-Wisdom.",
        "Contributed to UI, business logic, backend API integrations & production deployments.",
        "Took ownership of technically challenging features with aggressive release timelines."
      ]
    }
  ],
  projects: [
    { title: "WhatsApp Banking RM Bot", desc: "GenAI-powered WhatsApp chatbot that understands customer queries, identifies intent, and performs secure banking operations. Reduced support tickets by 40% and improved speed 3x.", tags: ["Spring Boot", "LangChain", "Llama 3.3", "ChromaDB", "WhatsApp API"], image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1000&auto=format&fit=crop" },
    { title: "RBI Compliance Monitoring Bot", desc: "Intelligent compliance assistant leveraging GenAI to analyze regulatory documents, flag non-compliant transactions, and summarize RBI circulars.", tags: ["Spring Boot", "Phidata (Agentic)", "Qdrant DB", "Llama 3.3", "Groq API"], image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" },
    { title: "Sampark & AU Hub", desc: "Internal banking applications providing interface to connect RMs to customers and managing employee services like HRMS and service desk.", tags: ["Flutter", "Spring Boot", "Microservices", "Internal Hosting"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" },
  ]
};

// --- DOM Population ---
document.addEventListener('DOMContentLoaded', () => {
    populateStaticContent();
    renderSkills();
    renderExperience();
    renderProjects();
    setupEventListeners();
    setupAIChat();
});

function populateStaticContent() {
    document.getElementById('nav-email-link').textContent = RESUME_DATA.email;
    document.getElementById('nav-email-link').href = `mailto:${RESUME_DATA.email}`;
    document.getElementById('hero-bio').textContent = RESUME_DATA.bio;

    const socialIcons = `
        <a href="${LINKEDIN_URL}" target="_blank" rel="noopener noreferrer" class="p-2 text-gray-400 hover:text-white transition-colors" title="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
        <a href="${GITHUB_URL}" target="_blank" rel="noopener noreferrer" class="p-2 text-gray-400 hover:text-white transition-colors" title="GitHub"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg></a>
        <a href="mailto:${RESUME_DATA.email}" class="p-2 text-gray-400 hover:text-white transition-colors" title="Email"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></a>`;
    document.getElementById('hero-social-links').innerHTML = socialIcons;

    document.getElementById('contact-email-card').innerHTML = `<div class="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">${socialIcons.split('</a>')[2]}</div><div class="text-left text-sm font-medium">${RESUME_DATA.email}</div>`;
    document.getElementById('contact-phone-card').innerHTML = `<div class="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div><div class="text-left text-sm font-medium">${RESUME_DATA.phone}</div>`;
    
    document.getElementById('contact-hire-me').href = `mailto:${RESUME_DATA.email}`;
    document.getElementById('contact-social-links').innerHTML = socialIcons.replace(/28/g, '24');
}

function renderSkills() {
    const grid = document.getElementById('skills-grid');
    grid.innerHTML = RESUME_DATA.skills.map(cat => `
        <div class="glass p-8 rounded-3xl border-white/5 hover:border-purple-500/30 transition-all group">
            <div class="mb-6 p-3 bg-white/5 rounded-2xl inline-block text-purple-400 group-hover:scale-110 transition-transform">${cat.icon}</div>
            <h3 class="text-xl font-bold mb-4">${cat.title}</h3>
            <div class="flex flex-wrap gap-2">
                ${cat.items.map(skill => `<span class="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[11px] font-medium text-gray-400 hover:text-white hover:bg-purple-500/10 transition-colors cursor-default">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderExperience() {
    const timeline = document.getElementById('experience-timeline');
    timeline.innerHTML = RESUME_DATA.experience.map(job => `
        <div class="relative group">
            <div class="md:grid md:grid-cols-4 md:gap-12">
                <div class="mb-4 md:mb-0 md:text-right">
                    <div class="text-purple-500 font-bold text-lg">${job.company}</div>
                    <div class="text-gray-500 text-xs font-mono uppercase tracking-widest">${job.period}</div>
                    <div class="text-gray-600 text-[10px] mt-1 italic">${job.location}</div>
                </div>
                <div class="md:col-span-3 border-l-2 border-white/5 md:pl-12 pl-8 relative">
                    <div class="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-purple-500 group-hover:scale-150 transition-transform"></div>
                    <h3 class="text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">${job.role}</h3>
                    <p class="text-gray-400 text-sm mb-6 leading-relaxed italic">${job.description}</p>
                    <ul class="space-y-4">
                        ${job.achievements.map(pt => `<li class="flex gap-4 text-gray-300 text-sm leading-relaxed"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500 flex-shrink-0 mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>${pt}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = RESUME_DATA.projects.map(p => `
        <div class="group glass rounded-3xl overflow-hidden border-white/5 hover:border-white/10 transition-all">
            <div class="h-48 overflow-hidden relative">
                <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">${p.title}</h3>
                <p class="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">${p.desc}</p>
                <div class="flex flex-wrap gap-2">
                    ${p.tags.map(tag => `<span class="text-[10px] font-bold uppercase tracking-wider text-gray-500 px-2 py-1 bg-white/5 rounded-md border border-white/5">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function setupEventListeners() {
    document.getElementById('nav-brand').addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
    document.getElementById('nav-resume-button').addEventListener('click', () => window.open(RESUME_URL, '_blank'));
    document.getElementById('hero-resume-button').addEventListener('click', () => window.open(RESUME_URL, '_blank'));
}

// --- AI Chat Logic ---
function setupAIChat() {
    const openButton = document.getElementById('chat-open-button');
    const closeButton = document.getElementById('chat-close-button');
    const sendButton = document.getElementById('chat-send-button');
    const chatWindow = document.getElementById('chat-window');
    const chatInput = document.getElementById('chat-input');
    const messagesContainer = document.getElementById('chat-messages');
    let isLoading = false;

    const toggleChat = (isOpen) => chatWindow.classList.toggle('hidden', !isOpen);

    openButton.addEventListener('click', () => toggleChat(true));
    closeButton.addEventListener('click', () => toggleChat(false));
    sendButton.addEventListener('click', handleSend);
    chatInput.addEventListener('keydown', (e) => e.key === 'Enter' && handleSend());

    appendMessage('bot', "Namaste! I'm Shashank's AI assistant. Ask me about his microservices expertise or his GenAI projects.");
    
    function appendMessage(role, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'}`;
        messageDiv.innerHTML = `
            <div class="max-w-[80%] px-3 py-2 rounded-xl text-xs leading-relaxed ${role === 'user' ? 'bg-purple-600 text-white shadow-lg' : 'glass border-white/10 text-gray-200'}">
                ${text}
            </div>`;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function setLoading(state) {
        isLoading = state;
        const existingLoader = messagesContainer.querySelector('.loader');
        if (state && !existingLoader) {
            const loaderDiv = document.createElement('div');
            loaderDiv.className = 'loader text-purple-500 text-[10px] animate-pulse';
            loaderDiv.textContent = 'Consulting my logs...';
            messagesContainer.appendChild(loaderDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        } else if (!state && existingLoader) {
            existingLoader.remove();
        }
    }

    async function handleSend() {
        const apiKey = window.process?.env?.API_KEY || '';
        const userInput = chatInput.value.trim();
        if (!userInput || isLoading) return;

        appendMessage('user', userInput);
        chatInput.value = '';

        if (!apiKey) {
            appendMessage('bot', "The AI agent is currently offline as it requires an API key. Please contact Shashank directly for a demonstration.");
            return;
        }
        
        setLoading(true);

        try {
            const ai = new GoogleGenAI({ apiKey });
            const response = await ai.models.generateContent({
                model: 'gemini-3-flash-preview',
                contents: userInput,
                config: {
                    systemInstruction: `You are Shashank Jamdade's professional AI representative. Context: Java 17/21, Spring Boot, Microservices, Kafka, AWS, GenAI. 50-60M API transactions/month at AU Bank. Projects: WhatsApp Banking RM Bot, RBI Compliance Bot. Brief responses only. For contact: ${RESUME_DATA.email}.`,
                }
            });
            appendMessage('bot', response.text || "I'm processing that inquiry!");
        } catch (e) {
            appendMessage('bot', "Apologies, I hit a slight connection glitch.");
        } finally {
            setLoading(false);
        }
    }
}
