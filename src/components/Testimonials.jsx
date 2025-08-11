import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { initializeApp, getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAn13hghDFwz7K252p28WsvWHC30fwunsg",
  authDomain: "soutrik-portfolio.firebaseapp.com",
  projectId: "soutrik-portfolio",
  storageBucket: "soutrik-portfolio.firebasestorage.app",
  messagingSenderId: "49882300539",
  appId: "1:49882300539:web:ed773e14f8da49558222de",
  measurementId: "G-VGWL3RT23R",
};

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firebaseError, setFirebaseError] = useState(null);

  useEffect(() => {
    try {
      if (!firebaseConfig.apiKey) {
        setFirebaseError("Missing Firebase config");
        setLoading(false);
        return;
      }

      if (!getApps().length) {
        initializeApp(firebaseConfig);
      }

      const db = getFirestore();
      const collectionPath = "testimonials/portfolio/reviews";
      const q = query(
        collection(db, collectionPath),
        orderBy("createdAt", "desc")
      );

      const unsub = onSnapshot(
        q,
        (snapshot) => {
          const fetched = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setReviews(fetched);
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setFirebaseError("Failed to fetch testimonials");
          setLoading(false);
        }
      );

      return () => unsub();
    } catch (err) {
      console.error(err);
      setFirebaseError("Error initializing Firebase");
      setLoading(false);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // 1 testimonial at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  if (loading) {
    return (
      <section
        id="testimonials"
        className="py-16 text-center text-gray-500 dark:text-gray-400"
      >
        <p>Loading testimonials...</p>
      </section>
    );
  }

  if (firebaseError) {
    return (
      <section
        id="testimonials"
        className="py-16 text-center text-red-500 dark:text-red-400"
      >
        <p>{firebaseError}</p>
      </section>
    );
  }

  return (
    <section
      id="testimonials"
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900 font-['Inter']"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Testimonials
      </h2>
      <div className="max-w-3xl mx-auto">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="px-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                  "{review.reviewText}"
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  - {review.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
