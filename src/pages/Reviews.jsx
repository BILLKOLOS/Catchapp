import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';
import serviceData from '../data/service';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    // Find the provider's reviews
    const formattedProfileData = serviceData.flatMap(service => 
      service.services.map(serviceItem => ({
        id: serviceItem.id, 
        reviews: serviceItem.profileData.reviews || []
      }))
    );

    const foundProfile = formattedProfileData.find(
      profile => profile.id.toString() === id
    );

    if (foundProfile && foundProfile.reviews) {
      setReviews(foundProfile.reviews);
      
      // Calculate average rating
      const total = foundProfile.reviews.reduce((sum, review) => sum + review.rating, 0);
      setAverageRating((total / foundProfile.reviews.length).toFixed(1));
    }
  }, [id]);

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="w-full p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#272222]">Customer Reviews</h2>
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold text-[#272222]">{averageRating}</div>
          <div className="flex">{renderStars(averageRating)}</div>
          <div className="text-sm text-gray-500">({reviews.length} reviews)</div>
        </div>
      </div>

      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-[#272222] rounded-[30px] p-4 text-white"
            >
              <div className="flex justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-white">{review.name}</h3>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  {new Date(review.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
              </div>
              <p className="text-gray-300 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">No reviews yet</div>
      )}
    </div>
  );
};

export default Reviews;