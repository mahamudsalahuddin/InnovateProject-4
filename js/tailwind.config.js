tailwind.config = {
    theme: {
      extend: {
        colors: {
          red: '#F40404',
          blacklight: '#6C6C6C',
          whitelight: '#F0F0F0',
          white: '#FFFFFF',
          yellow: '#FFB800',
          footerUp: '#1F1F1F',
          footerDown: '#282828',
          coppyright: '#6C6C6C',
        },
        maxWidth:{
          container: '1140px',
        },
        fontFamily: {
          'poppins':'Poppins',
        },
        backgroundImage: {
          banner: "url('images/banner.webp')",
          service1: "url('images/service1.png')",
          service2: "url('images/service2.png')",
          service3: "url('images/service3.png')",
          aboutImage: "url('images/aboutImage.webp')",
          blogImage1: "url('images/blogImage1.png')",
          blogImage2: "url('images/blogImage2.png')",
          blogImage3: "url('images/blogImage3.png')",
        },
        zIndex: {
          '1': '1',
          '2': '2',
          '3': '3',
        },
      },
    },
  }