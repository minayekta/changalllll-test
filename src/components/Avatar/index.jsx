const Avatar = ({ size = 'medium', alt = 'User Avatar', src }) => {
  const sizeClasses = {
    small: 'h-8 w-8',
    medium: 'h-12 w-12',
    large: 'h-16 w-16',
    xlarge: 'h-40 w-40',
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${
        sizeClasses[size] || sizeClasses.medium
      } rounded-full object-cover border border-solid border-blue-600`}
    />
  );
};

export default Avatar;
