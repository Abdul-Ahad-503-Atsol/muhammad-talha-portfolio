import { useEffect } from 'react';
import { X } from 'lucide-react';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';

export default function Modal({
  label,
  onClose,
  className = '',
  backdropClassName = 'modal-backdrop',
  closeContent = <X />,
  closeLabel = 'Close',
  children,
}) {
  useBodyScrollLock();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className={backdropClassName}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className={className} role="dialog" aria-modal="true" aria-label={label}>
        <button type="button" className="modal-close" onClick={onClose} aria-label={closeLabel}>
          {closeContent}
        </button>
        {children}
      </div>
    </div>
  );
}
