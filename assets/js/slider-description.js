// JavaScript code to update the description text based on the current slide
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,  // Number of slides visible at once
    spaceBetween: 20,  // Space between slides
    navigation: {
      nextEl: '.swiper-button-next',  // Next slide button class
      prevEl: '.swiper-button-prev',  // Previous slide button class
    },
    pagination: {
      el: '.swiper-pagination',  // Pagination container class
    },
  });
  
  
  swiper.on('slideChange', function () {
    const slideIndex = swiper.activeIndex;
    const descriptions = [
        "Description for Image 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Data analysts are the modern-day detectives, sifting through vast datasets to uncover valuable insights. With a keen eye for patterns and trends, you transform raw information into actionable strategies. Your work helps businesses make informed decisions and adapt to a rapidly changing world.",
        "Environmental scientists are stewards of our planet. You explore the intricacies of the natural world, studying ecosystems, climate, and pollution. By researching and implementing sustainable practices, you play a crucial role in protecting the environment for future generations.",
        "Doctors are the epitome of compassion and expertise. You diagnose and treat illnesses, providing comfort and hope to patients in their times of need. Your dedication to health and well-being saves lives and fosters trust in the medical profession.",
        "Entrepreneurs are fearless visionaries who turn dreams into reality. You identify opportunities, take calculated risks, and build businesses from the ground up. Your innovation and resilience drive economic growth and inspire others to follow their entrepreneurial aspirations.",
        "In the age of digital warfare, cyber security experts are the guardians of data. You protect sensitive information and systems from malicious threats and breaches. Your vigilance keeps the online world safe and secure, ensuring the privacy of individuals and organizations.",
        "As a physiotherapist, you restore the gift of movement. Through specialized exercises and treatments, you help patients recover from injuries, surgeries, or physical ailments. Your expertise improves their quality of life and promotes physical well-being.",
        "Nutritionists are wellness advocates who guide individuals toward healthier lifestyles. You educate on the importance of balanced diets and help people make informed food choices. Your expertise fosters long-term well-being and contributes to the prevention of diet-related health issues.",
        "Supply chain managers are the logistical maestros behind the scenes. You orchestrate the seamless flow of goods from production to delivery, optimizing efficiency and cost-effectiveness. Your strategic planning and problem-solving skills are essential for the success of businesses in a global marketplace.",
      ];
      
  
    // Update the description based on the current slide
    const dynamicDescription = document.querySelector(".dynamic-description");
    dynamicDescription.textContent = descriptions[slideIndex];

    const headings = [
        "SOFTWARE Developer",
        "DATA Analyst",
        "ENVIRONMENTAL Scientist",
        "DOCTOR",
        "Entrepreneur",
        "CYBER Security",
        "Physiotherapist",
        "Nutritionist",
        "SUPPLY CHAIN Manager",
      ];
    
      // Update the heading based on the current slide
      const dynamicHeading = document.querySelector(".dynamic-heading");
      dynamicHeading.textContent = headings[slideIndex];
  });
  
  