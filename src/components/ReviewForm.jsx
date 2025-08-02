import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn13hghDFwz7K252p28WsvWHC30fwunsg",
  authDomain: "soutrik-portfolio.firebaseapp.com",
  projectId: "soutrik-portfolio",
  storageBucket: "soutrik-portfolio.firebasestorage.app",
  messagingSenderId: "49882300539",
  appId: "1:49882300539:web:ed773e14f8da49558222de",
  measurementId: "G-VGWL3RT23R"
};

const ReviewForm = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // State for Firebase connection
  const [db, setDb] = useState(null);
  const [userId, setUserId] = useState(null);
  const [firebaseError, setFirebaseError] = useState(null);

  // This effect initializes Firebase and signs in anonymously
  useEffect(() => {
    try {
      if (!firebaseConfig.apiKey) {
        setFirebaseError("Database connection failed. Please add your Firebase config.");
        return;
      }
      
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      setDb(getFirestore(app));

      signInAnonymously(auth).then((userCredential) => {
        setUserId(userCredential.user.uid);
      }).catch((error) => {
        setFirebaseError("Authentication failed. Review submission is disabled.");
        console.error("Anonymous sign-in failed:", error);
      });

    } catch (e) {
      setFirebaseError("Failed to initialize Firebase. Review submission is disabled.");
      console.error("Firebase initialization failed:", e);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    
    // Validate inputs
    if (!name || !reviewText) {
      setMessage("Please fill out both your name and review.");
      setIsSubmitting(false);
      return;
    }
    
    // Check if Firebase is ready
    if (firebaseError || !db || !userId) {
      setMessage("The database is not connected. Cannot submit review.");
      setIsSubmitting(false);
      return;
    }

    try {
      // We will use a simple collection path for now
      const collectionPath = `testimonials/portfolio/reviews`;
      
      // Add a new document to the 'reviews' collection
      await addDoc(collection(db, collectionPath), {
        name,
        reviewText,
        createdAt: serverTimestamp(),
      });

      setMessage("Thank you! Your review has been submitted.");
      setName('');
      setReviewText('');
    } catch (error) {
      console.error("Error adding document: ", error);
      setMessage("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="review-form" className="py-16 px-4">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">Leave a Review</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50 dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-blue-500"
              placeholder="Soutrik Ghosh"
              disabled={isSubmitting || firebaseError}
              required
            />
          </div>
          <div>
            <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Review</label>
            <textarea
              id="reviewText"
              rows="4"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50 dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-blue-500"
              placeholder="This guy is awesome..."
              disabled={isSubmitting || firebaseError}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-md text-white font-semibold bg-blue-600 hover:bg-blue-700 transition-colors disabled:opacity-50"
            disabled={isSubmitting || firebaseError}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
        {message && (
          <p className={`mt-4 text-center text-sm ${message.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>{message}</p>
        )}
        {firebaseError && (
          <p className="mt-4 text-center text-sm text-red-600 font-medium">{firebaseError}</p>
        )}
      </div>
    </section>
  );
};

export default ReviewForm;

