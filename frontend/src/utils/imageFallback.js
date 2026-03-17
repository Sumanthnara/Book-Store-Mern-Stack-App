export const FALLBACK_BOOK_IMAGE =
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop';

export const handleBookImageError = (event) => {
    const img = event.currentTarget;
    img.onerror = null;
    img.src = FALLBACK_BOOK_IMAGE;
};
