import { useEffect, useState } from 'react';
import { reviews } from '../../data/reviews';
import { ASSET_BASE } from '../../constants';
import StarIcon from '../ui/StarIcon';
import Button from '../ui/Button';

export default function Reviews() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setReviewIndex((current) => (current + 1) % reviews.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section className="section reviews-section" id="reviews">
      <div className="reviews-inner">
        {/* <div className="section-kicker">CLIENT REVIEWS</div> */}
        <div className="section-top">
          <h2>Good work speaks.<br /><em>Clients confirm it.</em></h2>
          <p className="section-intro">A selection of feedback on engineering quality, communication, reliability, and delivery.</p>
        </div>
        <div
          className="reviews-viewport"
          aria-label="Client reviews carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
          }}
        >
          <div className="reviews-track">
            {[0, 1].map((offset) => {
              const review = reviews[(reviewIndex + offset) % reviews.length];
              return (
                <article className="review-card" key={`${review.image}-${reviewIndex}-${offset}`}>
                  <div className="review-card-top">
                    <span className="review-stars" aria-label="Five stars">
                      {[1, 2, 3, 4, 5].map((star) => <StarIcon key={star} />)}
                    </span>
                    <span className="review-label">Client feedback</span>
                  </div>
                  <div className="review-image-wrap">
                    <img
                      src={`${ASSET_BASE}${encodeURIComponent(review.image)}`}
                      alt={review.alt}
                      loading="eager"
                      onError={(event) => console.error('Unable to load review image:', event.currentTarget.src)}
                    />
                  </div>
                  <div className="review-card-footer"><span>Project review</span></div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="reviews-controls" aria-label="Review carousel controls">
          <div className="reviews-dots">
            {reviews.map((review, index) => (
              <Button
                key={review.image}
                variant="dot"
                aria-label={`Show review ${index + 1}`}
                aria-current={reviewIndex === index ? 'true' : 'false'}
                onClick={() => setReviewIndex(index)}
              />
            ))}
          </div>
        </div>
        <p className="reviews-note">Original review screenshots are shown without rewriting the client feedback.</p>
      </div>
    </section>
  );
}
