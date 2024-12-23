import React from 'react';

const ReviewsPage = () => {
  const starRatings = [5, 4, 3, 2, 1];
  const starCounts = [180, 35, 10, 5, 1]; // Example count for each star
  const totalRatings = starCounts.reduce((acc, count) => acc + count, 0);

  const reviews = [
    {
      name: 'Abdullah Aziz',
      image: 'https://th.bing.com/th/id/OIP.NMNyhvOZ6boy_d73gooS2wHaHa?w=183&h=183&c=7&pcl=1b1a19&r=0&o=5&pid=1.7',
      review:
        'This course is amazing and helped me a lot in my design career!',
      rating: 5,
    },
    {
      name: 'John Doe',
      image: 'https://th.bing.com/th/id/OIP.LLuVTu41DLcaUG62HRrgAQHaLH?w=183&h=274&c=7&pcl=1b1a19&r=0&o=5&pid=1.7',
      review: 'Great course with a lot of helpful insights.',
      rating: 4,
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Reviews</h3>

      {/* Ratings Breakdown */}
      <div className="mb-6">
        <h4 className="text-2xl font-bold">4.8</h4>
        <p className="text-sm text-gray-500">{totalRatings} Reviews</p>
        {starRatings.map((star, index) => (
          <div key={index} className="flex items-center mt-2">
            <span className="text-sm text-gray-500 w-10">{star} ★</span>
            <div className="flex-grow h-2 bg-gray-200 rounded-lg overflow-hidden mx-2">
              <div
                className="h-full bg-yellow-400"
                style={{
                  width: `${(starCounts[index] / totalRatings) * 100}%`,
                }}
              ></div>
            </div>
            <span className="text-sm text-gray-500">{starCounts[index]}</span>
          </div>
        ))}
      </div>

      {/* Individual Reviews */}
      {reviews.map((review, index) => (
        <div key={index} className="flex items-start mb-6">
          <img
            src={review.image}
            alt={review.name}
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <h5 className="font-bold text-sm">{review.name}</h5>
            <span className="text-yellow-400">{'★'.repeat(review.rating)}</span>
            <p className="text-sm text-gray-600 mt-2">{review.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsPage;
