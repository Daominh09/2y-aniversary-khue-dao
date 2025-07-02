// pages/index.tsx
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <audio autoPlay playsInline>
        <source src="musics/background-1.mp3" />
      </audio>
      <Head>
        <title>This Is for Khuê Thối</title>
        <meta charSet="utf-8" />
      </Head>

      {/* Load your scripts in order */}
      <Script src="/js/jquery.js" strategy="beforeInteractive" />
      <Script src="/js/garden.js" strategy="beforeInteractive" />
      <Script src="/js/functions.js" strategy="beforeInteractive" />
      <Script src="/js/initHeart.js" strategy="afterInteractive" />

      <div id="mainDiv">
        <div id="content">
          <div id="code">
            <span className="comments">/**</span><br />
            <span className="space" /> <span className="comments">* THE CODE OF LOVE</span><br />
            <span className="space" /> <span className="comments">*/</span><br />
            Chào Khuê !<br />
            Khuê có nhớ hôm nay là ngày gì không ?<br />
            <span className="comments">// 2/7 Kỉ niệm 2 năm anh được ngồi chơi với Khuê thối đấy hẹ hẹ hẹ.</span><br />
            Năm nay anh không được gặp Khuê huhuhu, chả được nắm tay với ôm Khuê như năm ngoái;<br />
            Năm ngoái mình còn đi chụp ảnh xong đi homestay nấu thịt cuốn ngon ơi là ngon (Nhưng mà thịt cuốn bikini ngon hơn hí hí);<br />
            <span className="comments">// Nhớ Khuê kinh khủng khiếp.</span><br />
            2 năm yêu nhau rồi mà chả thấy mình lớn lên tí nào nhỉ vẫn suốt ngày cãi nhau chí choé;<br />
            Nhưng thời gian trôi qua anh cảm nhận được mình cũng hiểu nhau nhiều hơn đấy;<br />
            Dù cãi nhau um xùm chả bao giờ sau đấy mình hết yêu nhau cả;<br />
            <span className="comments">// As the time went on.</span><br />
            The Bond grew stronger and stronger;<br />
            This is a Journey from Forgiveness to Love;<br />
            We have traveled a long way together;<br />
            There have been fights;<br />
            <span className="comments">// And I’m sure there will be more.</span><br />
            But our Bond will always grow back Stronger;<br />
            <br /><br />
            All I want to say is:<br />
            Baby, I will love you forever;<br />
            <br /><br />
            Now if you want to hug me you can touch the heart below<br />
            <br />
            <span id="heartspan">
              <Link href="/gallery">
                <i className="fas fa-heart" id="icon" />
              </Link>
            </span>
          </div>

          <div id="loveHeart">
            <canvas id="garden" />
            <div id="words">
              <div id="messages">
                DÙ CHO TẬN THẾ VẪN YÊU KHUÊ
                <div id="elapseClock" />
              </div>
              <div id="loveu">
                I LUV YOU SO MUCH<br />
                <div className="signature">- Đào béo thối ị</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
