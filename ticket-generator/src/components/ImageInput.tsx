import React, { useCallback, useState, useRef } from 'react';
import { FaImage } from 'react-icons/fa';

interface ImageInputProps {
    onImageChange: (imageSrc: string | null) => void; // Callback to notify parent of image changes
}

const ImageInput: React.FC<ImageInputProps> = ({ onImageChange }) => {
    const [image, setImage] = useState<string | null>(null);
    const [dragOver, setDragOver] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null); // Ref for the file input

    const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragOver(false);

        const file = event.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target && e.target.result) {
                    const imageSrc = e.target.result as string;
                    setImage(imageSrc);
                    onImageChange(imageSrc); // Notify parent of the new image
                }
            };
            reader.readAsDataURL(file);
        }
    }, [onImageChange]);

    const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragOver(true);
    }, []);

    const handleDragLeave = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragOver(false);
    }, []);

    const handleFileInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target && e.target.result) {
                    const imageSrc = e.target.result as string;
                    setImage(imageSrc);
                    onImageChange(imageSrc); // Notify parent of the new image
                }
            };
            reader.readAsDataURL(file);
        }
    }, [onImageChange]);

    const handleRemoveImage = () => {
        setImage(null); // Remove the image
        onImageChange(null); // Notify parent that the image is removed
    };

    const handleChangeImage = () => {
        // Trigger the file input click event using the ref
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            style={{
                border: dragOver ? '2px dashed #007bff' : '2px dashed #ccc',
                borderRadius: '8px',
                textAlign: 'center',
                cursor: 'pointer',
            }}
            className="glassmorphism px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-10 lg:py-6"
        >
            {image ? (
                <div className="flex flex-col items-center gap-4">
                    <img
                        src={image}
                        alt="Uploaded"
                        className="rounded-md max-w-full max-h-[50px] sm:max-h-[75px] md:max-h-[100px] lg:max-h-[150px]"
                    />
                    <div className="flex gap-4">
                        <button
                            onClick={handleRemoveImage}
                            className="text-white text-sm h-6  px-2 glassmorphism underline transition-colors"
                        >
                            Remove
                        </button>
                        <button
                            onClick={handleChangeImage}
                            className="text-white text-xs h-6  px-3 glassmorphism transition-colors"
                        >
                            Change
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <label htmlFor="fileInput" className="flex flex-col items-center gap-3 cursor-pointer">
                        <img
                            src="/src/assets/images/icon-upload.svg"
                            alt="upload-icon"
                            width="45px"
                            className="bg-white/10 border-[1px] border-white/10 p-1 rounded-lg"
                        />
                        <p className="text-gray-400 text-[13px] sm:text-sm">
                            Drag and drop an image here or click to upload
                        </p>
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileInput}
                        style={{ display: 'none' }}
                        id="fileInput"
                        ref={fileInputRef} // Add a ref to the file input
                    />
                </>
            )}
        </div>
    );
};

export default ImageInput;