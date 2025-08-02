import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, query, orderBy } from 'firebase/firestore';

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

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firebaseError, setFirebaseError] = useState(null);

  useEffect(() => {
    try {
      if (!firebaseConfig.apiKey) {
        setFirebaseError("Database connection failed. Please add your Firebase config.");
        setLoading(false);
        return;
      }

      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      
      const collectionPath = `testimonials/portfolio/reviews`;
      const q = query(collection(db, collectionPath), orderBy("createdAt", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedReviews = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setReviews(fetchedReviews);
        setLoading(false);
      }, (error) => {
        console.error("Error fetching testimonials: ", error);
        setFirebaseError("Failed to fetch testimonials. Please try again later.");
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (e) {
      setFirebaseError("Failed to initialize Firebase. Testimonials are not available.");
      setLoading(false);
      console.error("Firebase initialization failed:", e);
    }
  }, []);

  if (loading) {
    return (
      <section id="testimonials" className="py-16 px-4 text-center text-gray-500 dark:text-gray-400">
        <p>Loading testimonials...</p>
      </section>
    );
  }
  
  if (firebaseError) {
    return (
      <section id="testimonials" className="py-16 px-4 text-center text-red-600 dark:text-red-400">
        <p>{firebaseError}</p>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">What People Say</h2>
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">"{review.reviewText}"</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">- {review.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">Be the first to leave a review!</p>
        )}
      </div>
    </section>
  );
};

export default Testimonials;

