// Function to hide the "No" button when clicked
function hideNoButton() {
  const noBtn = document.getElementById('noBtn')
  const responseMessage = document.getElementById('responseMessage')

  // Add hide class for smooth animation
  noBtn.classList.add('hide')

  // Show a playful message
  responseMessage.textContent = "Haha, không có lựa chọn 'Không' đâu! 😄"
  responseMessage.className = 'response-message show'

  // Remove the button from DOM after animation
  setTimeout(() => {
    noBtn.style.display = 'none'
  }, 500)

  // Add some fun effects
  createConfetti()
}

// Function to handle when user accepts the invitation
function acceptInvitation() {
  const responseMessage = document.getElementById('responseMessage')
  const yesBtn = document.querySelector('.btn-yes')

  // Change button text and add celebration
  yesBtn.innerHTML =
    '<span>Yay! 🎉</span><div class="btn-sparkles"><span>✨</span><span>✨</span><span>✨</span></div>'

  // Show success message
  responseMessage.textContent =
    'Tuyệt vời! Chúng ta sẽ có một buổi tối thật vui vẻ! 🎵💕'
  responseMessage.className = 'response-message show success'

  // Add celebration effects
  createConfetti()
  createHeartBurst()

  // Disable the button to prevent multiple clicks
  yesBtn.disabled = true
  yesBtn.style.cursor = 'default'
}

// Function to create confetti effect
function createConfetti() {
  const colors = ['#ff69b4', '#ff1493', '#ffb6c1', '#ffc0cb', '#fff5f8']

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div')
    confetti.style.position = 'fixed'
    confetti.style.width = '10px'
    confetti.style.height = '10px'
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)]
    confetti.style.left = Math.random() * 100 + 'vw'
    confetti.style.top = '-10px'
    confetti.style.borderRadius = '50%'
    confetti.style.pointerEvents = 'none'
    confetti.style.zIndex = '1000'

    document.body.appendChild(confetti)

    // Animate confetti falling
    const animation = confetti.animate(
      [
        { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
        {
          transform: `translateY(${window.innerHeight + 100}px) rotate(${
            Math.random() * 360
          }deg)`,
          opacity: 0,
        },
      ],
      {
        duration: Math.random() * 3000 + 2000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }
    )

    // Remove confetti after animation
    animation.onfinish = () => {
      confetti.remove()
    }
  }
}

// Function to create heart burst effect
function createHeartBurst() {
  const heartContainer = document.querySelector('.heart-container')

  for (let i = 0; i < 8; i++) {
    const heart = document.createElement('div')
    heart.innerHTML = '❤️'
    heart.style.position = 'absolute'
    heart.style.fontSize = '2rem'
    heart.style.left = '50%'
    heart.style.top = '50%'
    heart.style.transform = 'translate(-50%, -50%)'
    heart.style.pointerEvents = 'none'
    heart.style.zIndex = '1000'

    heartContainer.appendChild(heart)

    // Calculate random direction
    const angle = i * 45 * (Math.PI / 180)
    const distance = 100 + Math.random() * 50
    const endX = Math.cos(angle) * distance
    const endY = Math.sin(angle) * distance

    // Animate heart burst
    const animation = heart.animate(
      [
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 0 },
        {
          transform: 'translate(-50%, -50%) scale(1)',
          opacity: 1,
          offset: 0.1,
        },
        {
          transform: `translate(calc(-50% + ${endX}px), calc(-50% + ${endY}px)) scale(0)`,
          opacity: 0,
        },
      ],
      {
        duration: 2000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }
    )

    // Remove heart after animation
    animation.onfinish = () => {
      heart.remove()
    }
  }
}

// Add some interactive effects when page loads
document.addEventListener('DOMContentLoaded', function () {
  // Add hover effect to the card
  const card = document.querySelector('.card')

  card.addEventListener('mouseenter', function () {
    this.style.transform = 'scale(1.02)'
    this.style.transition = 'transform 0.3s ease'
  })

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)'
  })

  // Add click effect to buttons
  const buttons = document.querySelectorAll('.btn')
  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      // Create ripple effect
      const ripple = document.createElement('span')
      ripple.style.position = 'absolute'
      ripple.style.borderRadius = '50%'
      ripple.style.background = 'rgba(255, 255, 255, 0.6)'
      ripple.style.transform = 'scale(0)'
      ripple.style.animation = 'ripple 0.6s linear'
      ripple.style.left = '50%'
      ripple.style.top = '50%'
      ripple.style.width = '100px'
      ripple.style.height = '100px'
      ripple.style.marginLeft = '-50px'
      ripple.style.marginTop = '-50px'
      ripple.style.pointerEvents = 'none'

      this.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })

  // Add CSS for ripple animation
  const style = document.createElement('style')
  style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `
  document.head.appendChild(style)

  // Add floating animation to event details
  const detailItems = document.querySelectorAll('.detail-item')
  detailItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`
    item.style.animation = 'slideInFromLeft 0.8s ease-out forwards'
    item.style.opacity = '0'
    item.style.transform = 'translateX(-30px)'
  })

  // Add CSS for slide in animation
  const slideStyle = document.createElement('style')
  slideStyle.textContent = `
        @keyframes slideInFromLeft {
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `
  document.head.appendChild(slideStyle)
})

// Add some fun mouse trail effect
let mouseTrail = []
document.addEventListener('mousemove', function (e) {
  const trail = document.createElement('div')
  trail.style.position = 'fixed'
  trail.style.width = '6px'
  trail.style.height = '6px'
  trail.style.backgroundColor = '#ff69b4'
  trail.style.borderRadius = '50%'
  trail.style.pointerEvents = 'none'
  trail.style.zIndex = '999'
  trail.style.left = e.clientX - 3 + 'px'
  trail.style.top = e.clientY - 3 + 'px'

  document.body.appendChild(trail)

  // Animate trail
  const animation = trail.animate(
    [
      { opacity: 0.8, transform: 'scale(1)' },
      { opacity: 0, transform: 'scale(0)' },
    ],
    {
      duration: 1000,
      easing: 'ease-out',
    }
  )

  animation.onfinish = () => {
    trail.remove()
  }

  mouseTrail.push(trail)

  // Limit trail length
  if (mouseTrail.length > 10) {
    const oldTrail = mouseTrail.shift()
    if (oldTrail && oldTrail.parentNode) {
      oldTrail.remove()
    }
  }
})
