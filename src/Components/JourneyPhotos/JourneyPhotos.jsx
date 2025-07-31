import React, { useState, useEffect, useRef, useCallback } from "react";
import { Image, Row, Col, Spin, Button } from "antd";
import "./JourneyPhotos.css";
import ImagesData from "./ImagesData";
import { Link } from "react-router-dom";

const JourneyPhotos = () => {
    const [visibleImages, setVisibleImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [displayedImages, setDisplayedImages] = useState([]);
    const observerRef = useRef(null);
    const imageRefs = useRef({});

    const imagesPerPage = 40; // Load 20 images at a time

    // Calculate which images to display based on current page
    useEffect(() => {
        const startIndex = (currentPage - 1) * imagesPerPage;
        const endIndex = startIndex + imagesPerPage;
        const newDisplayedImages = ImagesData.slice(startIndex, endIndex);
        setDisplayedImages(newDisplayedImages);

        // Mark first few images as visible immediately for better UX
        const initialVisibleIds = newDisplayedImages.slice(0, 8).map(img => img.id);
        setVisibleImages(initialVisibleIds);
    }, [currentPage]);

    // Initialize intersection observer
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const imageId = entry.target.dataset.imageId;
                        if (imageId) {
                            const id = parseInt(imageId);
                            setVisibleImages(prev => {
                                if (!prev.includes(id)) {
                                    return [...prev, id];
                                }
                                return prev;
                            });
                        }
                    }
                });
            },
            {
                rootMargin: '100px', // Start loading 100px before image comes into view
                threshold: 0.1
            }
        );

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []); // Remove visibleImages dependency to prevent infinite loops

    // Observe image elements
    const observeImage = useCallback((element, imageId) => {
        if (element && observerRef.current) {
            observerRef.current.observe(element);
            imageRefs.current[imageId] = element;
        }
    }, []);

    // Cleanup observer when component unmounts
    useEffect(() => {
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setCurrentPage(prev => prev + 1);
            setLoading(false);
        }, 500);
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setLoading(true);
            setTimeout(() => {
                setCurrentPage(prev => prev - 1);
                setLoading(false);
            }, 500);
        }
    };

    const renderImage = (image, index) => {
        const isVisible = visibleImages.includes(image.id);

        return (
            <Col xs={12} sm={12} md={8} lg={6} xl={4} key={image.id}>
                <div
                    className="image-wrapper"
                    ref={(el) => observeImage(el, image.id)}
                    data-image-id={image.id}
                >
                    {isVisible ? (
                        <Image
                            src={image.image}
                            alt={`Journey Photo ${index + 1}`}
                            className="gallery-image"
                            preview={{
                                mask: (
                                    <div className="preview-mask">
                                        <span>Click to Preview</span>
                                    </div>
                                ),
                            }}
                            placeholder={
                                <div className="image-placeholder">
                                    <Spin size="small" />
                                </div>
                            }
                        />
                    ) : (
                        <div className="image-placeholder">
                            <Spin size="small" />
                        </div>
                    )}
                </div>
            </Col>
        );
    };

    const totalPages = Math.ceil(ImagesData.length / imagesPerPage);
    const hasMoreImages = currentPage < totalPages;
    const hasPreviousImages = currentPage > 1;

    return (
        <div className="paddingTop marginTop marginBottom">
            <div className="Container">
                <div className='CommonHeader'>
                    <div className='TagContainer'>
                        <Link to="/"> Home</Link> . Journey Photos
                    </div>
                    <h2>Journey <span>Photos</span> </h2>
                </div>
                <br /><br />
                <div className="gallery-content">
                    <Row gutter={[16, 16]} className="gallery-grid">
                        {displayedImages.map((image, index) => renderImage(image, index))}
                    </Row>

                    <div className="pagination-controls">
                        {hasPreviousImages && (
                            <Button
                                type="primary"
                                onClick={handlePrevious}
                                loading={loading}
                                className="pagination-btn"
                            >
                                Previous
                            </Button>
                        )}

                        <span className="page-info">
                            Page {currentPage} of {totalPages}
                        </span>

                        {hasMoreImages && (
                            <Button
                                type="primary"
                                onClick={handleLoadMore}
                                loading={loading}
                                className="pagination-btn"
                            >
                                Load More
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JourneyPhotos;