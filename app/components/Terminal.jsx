'use client'
import React, { useEffect, useState, useRef } from 'react'

const Terminal = () => {
  // Terminal state
  const [input, setInput] = useState('')
  const [commandHistory, setCommandHistory] = useState([
    { text: 'Welcome to Siddharth\'s Portfolio v3.0.8', type: 'system-title' },
    { text: '© 2025 Siddharth Meena. All rights reserved.', type: 'system-copyright' },
    { text: 'Type "help" to see available commands.', type: 'system' }
  ])
  const [currentDir, setCurrentDir] = useState('~')
  const [pastCommands, setPastCommands] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isProcessing, setIsProcessing] = useState(false)
  const terminalRef = useRef(null)
  const inputRef = useRef(null)

  const handleWheel = (e) => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop += e.deltaY;
      e.stopPropagation();
    }
  };

  const commands = {
    help: 'List all available commands',
    about: 'Learn about Siddharth',
    skills: 'Display technical skills',
    contact: 'Get contact information',
    whoami: 'Display current user info',
    date: 'Display current date and time',
    echo: 'Echo a message',
    ping: 'Ping a server',
    clear: 'Clear terminal',
    ls: 'List all available commands',
    cat: 'Display file contents',
    tree: 'Display directory tree',
    matrix: 'Enter the Matrix',
    neofetch: 'Display system info',
    hack: 'Simulate hacking (because why not?)',
    cowsay: 'Let a cow say something',
    fortune: 'Get a random fortune',
    sudo: 'Attempt to use sudo',
    exit: 'Exit terminal (just kidding, you can\'t escape)'
  }

  // Directory structure simulation
  const directories = {
    '~': ['about', 'contact'],
    '~/projects': [],
    '~/skills': [],
    '~/about': [],
    '~/contact': []
  }

  // Focus input field when clicking anywhere in the terminal
  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  // Auto-scroll to bottom when command history updates
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commandHistory])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  // Smooth output rendering like Ubuntu terminal
  const renderOutput = async (output) => {
    setIsProcessing(true)
    
    for (let i = 0; i < output.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 20)) // 20ms delay between lines
      setCommandHistory(prev => [...prev, output[i]])
    }
    
    setIsProcessing(false)
  }

  const executeCommand = async (cmd) => {
    const args = cmd.split(' ')
    const command = args[0].toLowerCase()
    const params = args.slice(1)

    let output = []

    const cmdOutput = { text: `${currentDir} $ ${cmd}`, type: 'command' }
    setCommandHistory(prev => [...prev, cmdOutput])

    switch (command) {
      case 'help':
        output.push({ text: '╔════════════════════════════════════╗', type: 'system-border' })
        output.push({ text: '║           AVAILABLE COMMANDS        ║', type: 'system-header' })
        output.push({ text: '╚════════════════════════════════════╝', type: 'system-border' })
        Object.entries(commands).forEach(([cmd, desc]) => {
          output.push({ text: `  ${cmd.padEnd(12)} - ${desc}`, type: 'system' })
        })
        break

      case 'about':
        output.push({ text: '╔════════════════════════════════════╗', type: 'system-border' })
        output.push({ text: '║           ABOUT SIDDHARTH          ║', type: 'system-header' })
        output.push({ text: '╚════════════════════════════════════╝', type: 'system-border' })
        output.push({ text: '/**', type: 'comment' })
        output.push({ text: ' * Fullstack developer and Gamer-Student', type: 'comment' })
        output.push({ text: ' * Passionate about clean code and clean UI', type: 'comment' })
        output.push({ text: ' * Currently focused on Web and Cybersecurity', type: 'comment' })
        output.push({ text: ' * Located in India, working remotely worldwide', type: 'comment' })
        output.push({ text: ' */', type: 'comment' })
        break

      case 'skills':
        output.push({ text: '╔════════════════════════════════════╗', type: 'system-border' })
        output.push({ text: '║          TECHNICAL SKILLS           ║', type: 'system-header' })
        output.push({ text: '╚════════════════════════════════════╝', type: 'system-border' })
        output.push({ text: '  Frontend:  React, Next.js, Tailwind CSS', type: 'system' })
        output.push({ text: '  Backend:   Node.js, Express, Hono.js, Python', type: 'system' })
        output.push({ text: '  Database:  MongoDB, PostgreSQL, MySQL', type: 'system' })
        output.push({ text: '  Tools:     Git, Docker, VS Code', type: 'system' })
        output.push({ text: '  Other:     Cybersecurity, Web3, AI/ML', type: 'system' })
        break

      case 'contact':
        output.push({ text: '╔════════════════════════════════════╗', type: 'system-border' })
        output.push({ text: '║          CONTACT INFO               ║', type: 'system-header' })
        output.push({ text: '╚════════════════════════════════════╝', type: 'system-border' })
        output.push({ text: '  Email:    siddz.dev@gmail.com', type: 'system' })
        output.push({ text: '  GitHub:   github.com/SiddDevZ', type: 'system' })
        output.push({ text: '  LinkedIn: linkedin.com/in/siddharth-k-meena', type: 'system' })
        output.push({ text: '  Twitter:  @buildwithsid', type: 'system' })
        break

      case 'whoami':
        output.push({ text: 'siddharth@portfolio', type: 'system' })
        output.push({ text: 'Role: Fullstack Developer & Cybersecurity Enthusiast', type: 'system' })
        break

      case 'date':
        const now = new Date()
        output.push({ text: now.toString(), type: 'system' })
        break

      case 'echo':
        const echoMessage = params.length > 0 ? params.join(' ') : ''
        output.push({ text: echoMessage, type: 'system' })
        break

      case 'ping':
        const target = params[0] || 'google.com'
        output.push({ text: `PING ${target} (216.58.214.206): 56 data bytes`, type: 'system' })
        output.push({ text: `64 bytes from ${target}: icmp_seq=0 ttl=117 time=12.3 ms`, type: 'system' })
        output.push({ text: `64 bytes from ${target}: icmp_seq=1 ttl=117 time=11.8 ms`, type: 'system' })
        output.push({ text: `64 bytes from ${target}: icmp_seq=2 ttl=117 time=12.1 ms`, type: 'system' })
        output.push({ text: '', type: 'system' })
        output.push({ text: `--- ${target} ping statistics ---`, type: 'system' })
        output.push({ text: '3 packets transmitted, 3 received, 0% packet loss', type: 'system' })
        break

      case 'cat':
        const fileName = params[0] || 'README.md'
        output.push({ text: `# ${fileName}`, type: 'system' })
        output.push({ text: '', type: 'system' })
        output.push({ text: 'Welcome to my portfolio terminal!', type: 'system' })
        output.push({ text: 'Type "help" to see available commands.', type: 'system' })
        break

      case 'tree':
        output.push({ text: '.', type: 'system' })
        output.push({ text: '├── about/', type: 'file-list' })
        output.push({ text: '├── contact/', type: 'file-list' })
        output.push({ text: '├── projects/', type: 'file-list' })
        output.push({ text: '├── skills/', type: 'file-list' })
        output.push({ text: '└── README.md', type: 'file-list' })
        break

      case 'clear':
        setCommandHistory([])
        return

      case 'ls':
        output.push({ text: 'Commands:', type: 'system' })
        const commandList = Object.keys(commands);
        const commandsPerRow = 3;
        
        for (let i = 0; i < commandList.length; i += commandsPerRow) {
          const rowCommands = commandList.slice(i, i + commandsPerRow);
          const rowText = rowCommands.map(cmd => cmd.padEnd(13)).join('');
          output.push({ text: rowText, type: 'file-list' });
        }
        break

      case 'matrix':
        output.push({ text: '// Initializing the Matrix...', type: 'comment' })
        output.push({ text: '> Connection established', type: 'matrix' })
        
        for (let i = 0; i < 4; i++) {
          const binary = Array(20).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('')
          output.push({ text: binary, type: 'matrix' })
        }
        
        output.push({ text: '', type: 'system' })
        output.push({ text: 'WAKE UP NEO!', type: 'matrix-highlight' })
        output.push({ text: 'WAKE UP NEO!', type: 'matrix-highlight' })
        output.push({ text: 'THE MATRIX HAS YOU', type: 'matrix-highlight' })
        output.push({ text: 'Follow the white rabbit...', type: 'matrix' })
        break

      case 'neofetch':
        output.push({ text: '          siddharth@portfolio', type: 'system' })
        output.push({ text: '          -----------------', type: 'system' })
        output.push({ text: '          OS: Next.js/React', type: 'system' })
        output.push({ text: '          Host: Portfolio v3.0.0', type: 'system' })
        output.push({ text: '          Uptime: 3+ years', type: 'system' })
        output.push({ text: '          Skills: Next.js, Tailwind, React', type: 'system' })
        output.push({ text: '          Projects: 50+', type: 'system' })
        output.push({ text: '          GitHub: github.com/SiddDevZ', type: 'system' })
        break

      case 'hack':
        output.push({ text: '// DISCLAIMER: HACKING THE FBI NOW', type: 'comment' })
        output.push({ text: '', type: 'system' })
        output.push({ text: 'Initializing hack module...', type: 'hacking' })
        output.push({ text: 'Target acquired: fbi.gov...', type: 'hacking' })
        output.push({ text: 'Scanning for vulnerabilities...', type: 'hacking' })
        output.push({ text: 'Bypassing firewall...', type: 'hacking' })
        output.push({ text: 'Access denied! Trying alternative approach...', type: 'hacking' })
        output.push({ text: 'Implementing brute force attack...', type: 'hacking' })
        output.push({ text: 'SQL injection successful!', type: 'hacking' })
        output.push({ text: 'ERROR: FBI COUNTERATTACK DETECTED!', type: 'error' })
        output.push({ text: 'ABORT! ABORT! ABORT!', type: 'error' })
        output.push({ text: 'WHY ARE THERE TWO HELICOPTERS ABOVE ME?', type: 'error' })
        output.push({ text: 'gets arrested for hacking the FBI', type: 'italic' })
        output.push({ text: '', type: 'system' })
        output.push({ text: 'Just kidding lol', type: 'system' })
        break

      case 'cowsay':
        const message = params.length > 0 ? params.join(' ') : 'Hire Siddharth, he\'s awesome!'
        output.push({ text: ' _' + '_'.repeat(message.length) + '_', type: 'ascii-art' })
        output.push({ text: '< ' + message + ' >', type: 'ascii-art' })
        output.push({ text: ' -' + '-'.repeat(message.length) + '-', type: 'ascii-art' })
        output.push({ text: '        \\   ^__^', type: 'ascii-art' })
        output.push({ text: '         \\  (oo)\\_______', type: 'ascii-art' })
        output.push({ text: '            (__)\\       )\\/\\', type: 'ascii-art' })
        output.push({ text: '                ||----w |', type: 'ascii-art' })
        output.push({ text: '                ||     ||', type: 'ascii-art' })
        break

      case 'fortune':
        const fortunes = [
          'A pleasant surprise is waiting for you.',
          'Your creativity will lead you to remarkable success.',
          'An exciting opportunity is coming your way.',
          'You will soon embark on a journey that changes your life.',
          'The path you\'re on leads to prosperity and happiness.',
          'A meaningful connection will enter your life soon.',
          'Your hard work is about to pay off in unexpected ways.',
          'Success and fulfillment are within your reach.',
          'You will discover a hidden talent that brings you joy.',
          'The universe has wonderful plans for your future.'
        ]
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
        output.push({ text: `"${randomFortune}"`, type: 'system' })
        break

      case 'sudo':
        output.push({ text: 'Nice try! This incident will be reported to FBI. 😉', type: 'error' })
        break

      case 'exit':
        output.push({ text: '// Nice try kiddo. There is no escape.', type: 'comment' })
        output.push({ text: 'function attemptEscape() {', type: 'code' })
        output.push({ text: '  throw new Error("Cannot escape terminal. You are stuck here forever.");', type: 'code' })
        output.push({ text: '}', type: 'code' })
        break

      case '':
        break

      default:
        output.push({ text: `Command not found: ${command}. Type 'help' to see them.`, type: 'error' })
    }

    await renderOutput(output)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (pastCommands.length > 0) {
        const newIndex = historyIndex === -1 ? pastCommands.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(pastCommands[newIndex])
      }
    }
    else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= pastCommands.length) {
          setHistoryIndex(-1)
          setInput('')
        } else {
          setHistoryIndex(newIndex)
          setInput(pastCommands[newIndex])
        }
      }
    }
    else if (e.key === 'Tab') {
      e.preventDefault()
      const inputLower = input.toLowerCase()
      const matches = Object.keys(commands).filter(cmd => cmd.startsWith(inputLower))
      if (matches.length === 1) {
        setInput(matches[0])
      } else if (matches.length > 1 && input) {
        let commonPrefix = matches[0]
        for (let i = 1; i < matches.length; i++) {
          let j = 0
          while (j < commonPrefix.length && j < matches[i].length && 
                 commonPrefix[j] === matches[i][j]) {
            j++
          }
          commonPrefix = commonPrefix.substring(0, j)
        }
        if (commonPrefix.length > input.length) {
          setInput(commonPrefix)
        }
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (isProcessing) return
    
    if (input.trim() !== '') {
      setPastCommands(prev => [...prev, input])
      setHistoryIndex(-1)
      const cmd = input
      setInput('')
      await executeCommand(cmd)
    } else {
      await executeCommand('')
    }
  }

  return (
    <div>
      {/* Terminal-like section */}
      <div 
        className='border border-[#2d3748]/40 mb-8 mt-10 rounded-md bg-[#0f0f0f] backdrop-blur-sm overflow-hidden shadow-lg shadow-black/20'
        onClick={handleTerminalClick}
      >
        {/* Terminal header */}
        <div className='bg-[#1a1a1a] px-4 py-2 flex items-center border-b border-[#2d3748]/60'>
          <div className='w-3 h-3 rounded-full bg-red-500/90 mr-2 hover:bg-red-500 transition-colors'></div>
          <div className='w-3 h-3 rounded-full bg-yellow-500/90 mr-2 hover:bg-yellow-500 transition-colors'></div>
          <div className='w-3 h-3 rounded-full bg-green-500/90 mr-2 hover:bg-green-500 transition-colors'></div>
          <div className='text-white/70 text-xs ml-2 flex items-center'>
            terminal: ~
          </div>
        </div>
        
        {/* Terminal content */}
        <div 
          ref={terminalRef}
          className='p-4 text-sm font-mono h-[250px] overflow-y-auto custom-scrollbar bg-gradient-to-b from-[#121212] to-[#0a0a0a]'
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#333 #0f0f0f'
          }}
          onWheel={handleWheel}
        >
          {commandHistory.map((item, index) => (
            <div 
              key={index} 
              className={`mb-1 terminal-line ${
                item.type === 'command' ? 'text-[#d4d4d4] font-bold' : 
                item.type === 'error' ? 'text-[#f56565]' : 
                item.type === 'system-header' ? 'text-white font-bold' : 
                item.type === 'system-border' ? 'text-[#4a5568]' : 
                item.type === 'comment' ? 'text-[#6A9955] italic' : 
                item.type === 'code' ? 'text-[#9CDCFE]' :
                item.type === 'hacking' ? 'text-[#4EC9B0]' :
                item.type === 'code-prop' ? 'text-[#9CDCFE] ml-4' :
                item.type === 'code-value' ? 'text-[#CE9178] ml-4' :
                item.type === 'string' ? 'text-[#CE9178]' :
                item.type === 'file-list' ? 'text-[#DCDCAA]' :
                item.type === 'matrix' ? 'text-[#4EC9B0] font-mono' :
                item.type === 'italic' ? 'text-[#bdbdbd] italic' :
                item.type === 'matrix-highlight' ? 'text-[#58c94e] font-bold tracking-wider' :
                item.type === 'ascii-art' ? 'text-[#d4d4d4] font-mono whitespace-pre' :
                'text-[#d4d4d4]'
              }`}
            >
              {item.text}
            </div>
          ))}
          <form onSubmit={handleSubmit} className='flex items-center mt-2 group'>
            <span className='text-[#4EC9B0] mr-2 group-hover:text-[#38A89D] transition-colors'>{currentDir} $</span>
            <input
              ref={inputRef}
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className='flex-1 bg-transparent outline-none text-[#d4d4d4] caret-[#d4d4d4]'
              autoComplete='off'
              spellCheck='false'
            />
          </form>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0f0f0f;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        
        /* Smooth terminal line animation */
        @keyframes terminalFadeIn {
          from {
            opacity: 0;
            transform: translateY(-2px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .terminal-line {
          animation: terminalFadeIn 0.15s ease-out;
        }
      `}</style>
    </div>
  )
}

export default Terminal 