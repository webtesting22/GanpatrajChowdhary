import React, { useState } from "react";
import "./QuoteGenerator.css";

const QuoteGenerator = () => {
    const [category, setCategory] = useState("inspirational");
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const getQuote = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://api.quotable.io/random?tags=${category}`);
            const data = await response.json();
            setQuote(data.content);
            setAuthor(data.author);
        } catch (error) {
            setQuote("Oops! Something went wrong.");
            setAuthor("");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="quote-generator">
            <div className="Container">
                <div className="quote-content">
                    <div className="quote-header">
                        <h2>Daily <span>Inspiration</span></h2>
                        <p>Discover wisdom through carefully curated quotes</p>
                    </div>

                    <div className="quote-controls">
                        <div className="category-selector">
                            <label>Select Category:</label>
                            <select 
                                value={category} 
                                onChange={(e) => setCategory(e.target.value)}
                                className="category-select"
                            >
                                <option value="inspirational">Inspirational</option>
                                <option value="wisdom">Wisdom</option>
                                <option value="life">Life</option>
                                <option value="happiness">Happiness</option>
                                <option value="success">Success</option>
                                <option value="motivation">Motivation</option>
                                <option value="leadership">Leadership</option>
                                <option value="business">Business</option>
                            </select>
                        </div>

                        <button 
                            onClick={getQuote} 
                            className="generate-btn"
                            disabled={isLoading}
                        >
                            {isLoading ? "Generating..." : "Generate Quote"}
                        </button>
                    </div>

                    <div className="quote-display">
                        {quote && (
                            <div className="quote-card">
                                <div className="quote-icon">❝</div>
                                <p className="quote-text">"{quote}"</p>
                                <p className="quote-author"><strong>— {author}</strong></p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteGenerator; 