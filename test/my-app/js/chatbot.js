class Chatbot {
    constructor() {
        this.messages = [];
        this.isOpen = false;
        this.initElements();
        this.bindEvents();
        this.welcomeMessage();
    }

    initElements() {
        this.chatbotToggle = document.querySelector('.chatbot-toggle');
        this.chatbotWindow = document.querySelector('.chatbot-window');
        this.closeButton = document.querySelector('.close-chat');
        this.messagesContainer = document.querySelector('.chatbot-messages');
        this.input = document.querySelector('.chatbot-input input');
        this.sendButton = document.querySelector('.send-message');
    }

    bindEvents() {
        this.chatbotToggle.addEventListener('click', () => this.toggleChat());
        this.closeButton.addEventListener('click', () => this.closeChat());
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        this.chatbotWindow.classList.toggle('active');
        if (this.isOpen) {
            this.input.focus();
        }
    }

    closeChat() {
        this.isOpen = false;
        this.chatbotWindow.classList.remove('active');
    }

    welcomeMessage() {
        const welcomeMessages = [
            "你好！我是你的AI助手，有什么我可以帮你的吗？",
            "我可以回答关于这个网站的问题，",
            "也可以帮你了解更多关于站主的信息。"
        ];
        
        let delay = 0;
        welcomeMessages.forEach(msg => {
            setTimeout(() => this.addMessage(msg, 'bot'), delay);
            delay += 500;
        });
    }

    addMessage(text, sender) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender}-message`;
        messageElement.textContent = text;
        
        this.messagesContainer.appendChild(messageElement);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        
        this.messages.push({
            text,
            sender
        });
    }

    async sendMessage() {
        const text = this.input.value.trim();
        if (!text) return;

        // 清空输入框
        this.input.value = '';

        // 添加用户消息
        this.addMessage(text, 'user');

        // 模拟思考时间
        await this.simulateThinking();

        // 生成回复
        const response = this.generateResponse(text);
        this.addMessage(response, 'bot');
    }

    async simulateThinking() {
        const thinkingTime = Math.random() * 1000 + 500; // 500-1500ms
        await new Promise(resolve => setTimeout(resolve, thinkingTime));
    }

    generateResponse(text) {
        // 简单的关键词匹配响应系统
        const responses = {
            '你好': '你好！很高兴见到你！',
            '你是谁': '我是这个网站的AI助手，可以回答你关于网站和站主的问题。',
            '联系方式': '你可以通过页面底部的社交媒体链接联系站主。',
            '项目经验': '你可以在作品集部分查看站主的项目经验。',
            '技能': '站主擅长Web开发、人工智能等领域，具体可以查看关于我部分的技能展示。',
            '博客': '你可以点击导航栏的"博客"查看更多技术文章和分享。'
        };

        // 寻找最匹配的关键词
        let bestMatch = '';
        for (let key in responses) {
            if (text.toLowerCase().includes(key.toLowerCase())) {
                if (key.length > bestMatch.length) {
                    bestMatch = key;
                }
            }
        }

        // 如果找到匹配，返回对应回复
        if (bestMatch) {
            return responses[bestMatch];
        }

        // 默认回复
        return '抱歉，我可能没有完全理解你的问题。你可以试试问我关于网站功能、站主经历或者专业技能方面的问题。';
    }
}

// 初始化聊天机器人
document.addEventListener('DOMContentLoaded', () => {
    new Chatbot();
}); 