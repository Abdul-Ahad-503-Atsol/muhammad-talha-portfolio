import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import Button from './Button';

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

  return createPortal(
    <div
      className={backdropClassName}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className={className} role="dialog" aria-modal="true" aria-label={label}>
        <Button variant="icon" onClick={onClose} aria-label={closeLabel}>
          {closeContent}
        </Button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
