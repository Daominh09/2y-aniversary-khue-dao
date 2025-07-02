import Head from 'next/head'
import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'
import styles from '../styles/gallery.module.css'


const photos = [
  {
    file: '01.png',
    desc: 'First time we cook',       
    info: 'Cau Giay, July 13, 2023',   
  },
  {
    file: '02.png',
    desc: 'Dao + Khue + Soc',
    info: 'Lang Ha, July 17, 2023'
  },
  {
    file: '03.png',
    desc: 'Đi mua xúc xích',
    info: 'Lang Ha, July 22, 2023'
  },
  {
    file: '04.png',
    desc: 'Chụp Photo Booth',
    info: 'Lang Ha, Aug 8, 2023'
  },
  {
    file: '05.png',
    desc: 'Bye bye Dao',
    info: 'San bay Noi Bai, Aug 10, 2023'
  },
  {
    file: '06.png',
    desc: 'Nhuộm lại tóc',
    info: 'Beach Grove, Dec 16, 2023'
  },
  {
    file: '07.png',
    desc: 'Ngồi chờ xe bít',
    info: 'Indianapolis, Dec 18, 2023'
  },
  {
    file: '08.png',
    desc: 'Dạo phố Phily',
    info: 'Philadelphia, Dec 26, 2023'
  },
  {
    file: '09.png',
    desc: 'Merry Christmas',
    info: 'Philadelphia, Dec 26, 2023'
  },
  {
    file: '10.png',
    desc: 'Chèo thuyền',
    info: 'Tampa, Jan 20, 2024'
  },
  {
    file: '11.png',
    desc: 'Đi ăn Steak',
    info: 'Green Castle, March 15, 2024'
  },
  {
    file: '12.png',
    desc: 'Đi Nature Park',
    info: 'Green Castle, March 16, 2024'
  },
  {
    file: '13.png',
    desc: 'Đăp mặt nạ',
    info: 'Green Castle, March 18, 2024'
  },
  {
    file: '14.png',
    desc: '1/6 của bé Khuê',
    info: 'Quang Ba, June 1, 2024'
  },
  {
    file: '15.png',
    desc: 'Đi chơi với lớp',
    info: 'Hai Phong, July 1, 2024'
  },
  {
    file: '16.png',
    desc: 'Tròn 1 năm',
    info: 'Hoan Kiem, July 2, 2024'
  },
  {
    file: '17.png',
    desc: 'Quá nóng bỏng',
    info: 'St Petersburg, Oct 14, 2024'
  },
  {
    file: '18.png',
    desc: 'Chăm chỉ học bài',
    info: 'Tampa, Dec 17, 2024'
  },
  {
    file: '19.png',
    desc: 'Đi dạo ven sông',
    info: 'Tampa, Dec 21, 2024'
  },
  {
    file: '20.png',
    desc: 'Biển',
    info: 'St Augustine, Dec 23, 2024'
  },
  {
    file: '27.png',
    desc: 'Cướp biển',
    info: 'St Augustine, Dec 23, 2025'
  },
  {
    file: '21.png',
    desc: 'Quảng trường thời đại',
    info: 'New York City, March 20, 2025'
  },
  {
    file: '22.png',
    desc: 'Nữ thần tự do',
    info: 'New York City, March 22, 2025'
  },
  {
    file: '23.png',
    desc: 'Du thuyền',
    info: 'New York City, March 22, 2025'
  },
  {
    file: '24.png',
    desc: 'Empire State',
    info: 'New York City, March 22, 2025'
  },
  {
    file: '25.png',
    desc: 'Tàu điện ngầm',
    info: 'New York City, May 30, 2025'
  },
  {
    file: '26.png',
    desc: 'Google',
    info: 'New York City, June 2, 2025'
  },
]


const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 5.0 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 2.0 } }
}

export default function Gallery() {
  const [showQuestion, setShowQuestion] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [noPos, setNoPos] = useState({ top: '10%', left: '50%' })
  const [result, setResult] = useState('')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult('Sending…')

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      console.error('Missing WEB3FORMS access key')
      setResult('Configuration error: missing API key')
      return
    }

    const formData = new FormData(event.currentTarget)
    formData.append('access_key', accessKey)

    try {
      const resp = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      const data = await resp.json()
      if (data.success) {
        setResult('Form Submitted Successfully')
        event.currentTarget.reset()
      } else {
        console.error('Error', data)
        setResult(data.message || 'Submission failed')
      }
    } catch (err) {
      console.error(err)
      setResult('An error occurred')
    }
  }

  return (
    <>
      <audio controls autoPlay loop playsInline>
        <source src="musics/background-2.mp3" />
      </audio>
      <Head>
        <title>Our Gallery</title>
      </Head>

      <h1 className={styles.galleryTitle}>Our Gallery</h1>

      <motion.div
        className={styles.galleryGrid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => setShowQuestion(true)}
      >
        {photos.map(({ file, desc, info }) => (
          <motion.figure
            key={file}
            className={styles.galleryItem}
            variants={itemVariants}
          >
            <img
              src={`/images/${file}`}
              alt={desc}
              className={styles.galleryImage}
            />
            <figcaption className={styles.galleryCaption}>
              <span className={styles.description}>{desc}</span>
              <span className={styles.meta}>{info}</span>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>

      {showQuestion && (
        <div className={styles.questionContainer}>
          {!showForm ? (
            <>
              <p className={styles.questionText}>
                Will you agree to love me in the next year?
              </p>
              <div className={styles.buttonGroup}>
                <button
                  type="button"
                  className={styles.yesButton}
                  onClick={() => setShowForm(true)}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={styles.noButton}
                  style={{
                    '--no-top': noPos.top,
                    '--no-left': noPos.left,
                  } as React.CSSProperties}
                  onMouseEnter={() =>
                    setNoPos({
                      top: `${Math.random() * 60 + 10}%`,
                      left: `${Math.random() * 60 + 10}%`
                    })
                  }
                >
                  No
                </button>
              </div>
            </>
          ) : (
            <form
              onSubmit={onSubmit}
              className={styles.commitmentForm}
            >
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className={styles.formField}
              />
              <textarea
                name="commitment"
                placeholder="Your commitment..."
                required
                className={styles.formField}
              />
              <input
                type="text"
                name="signature"
                placeholder="Signature"
                required
                className={styles.formField}
              />
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
              {result && (
                <p className={styles.resultMessage}>{result}</p>
              )}
            </form>
          )}
        </div>
      )}
    </>
  )
}
