import React from "react";

const MapSection = () => (
  <div className="w-full my-8 rounded-lg overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.432377158905!2d73.81531077524984!3d18.59961228250939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f7cf598c79%3A0x119a88c7efbf6c85!2sQuick%20Management%20Services!5e0!3m2!1sen!2sin!4v1759779305841!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Office Location Map"
    />
  </div>
);

export default MapSection;
