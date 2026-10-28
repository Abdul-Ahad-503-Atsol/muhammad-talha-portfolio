import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { reviews } from '../../data/reviews';
import { ASSET_BASE } from '../../constants';
import StarIcon from '../ui/StarIcon';

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

  const showPrevious = () => setReviewIndex((current) => (current - 1 + reviews.length) % reviews.length);
  const showNext = () => setReviewIndex((current) => (current + 1) % reviews.length);

  return (
    <section className="section reviews-section" id="reviews">
      <div className="reviews-inner">
        <div className="section-kicker">CLIENT REVIEWS</div>
        <div className="reviews-heading">
          <div>
            <span className="reviews-kicker">TRUST BUILT THROUGH DELIVERY</span>
            <h2>Good work speaks.<br /><em>Clients confirm it.</em></h2>
          </div>
        </div>
        <p className="reviews-intro">A selection of feedback on engineering quality, communication, reliability, and delivery.</p>
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
                  <div className="review-card-footer"><span>Project review</span><ArrowUpRight size={17} /></div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="reviews-controls" aria-label="Review carousel controls">
          <button type="button" className="reviews-arrow" aria-label="Previous reviews" onClick={showPrevious}>
            <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} />
          </button>
          <div className="reviews-dots">
            {reviews.map((review, index) => (
              <button
                key={review.image}
                type="button"
                className="reviews-dot"
                aria-label={`Show review ${index + 1}`}
                aria-current={reviewIndex === index ? 'true' : 'false'}
                onClick={() => setReviewIndex(index)}
              />
            ))}
          </div>
          <button type="button" className="reviews-arrow" aria-label="Next reviews" onClick={showNext}>
            <ArrowRight size={18} />
          </button>
        </div>
        <p className="reviews-note">Original review screenshots are shown without rewriting the client feedback.</p>
      </div>
    </section>
  );
}
