import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">Privacy Policy</h1>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="lead text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                    At Elegance Essence, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Elegance Essence and how we use it.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Log Files</h2>
                <p>
                    Elegance Essence follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Privacy Policies</h2>
                <p>
                    You may consult this list to find the Privacy Policy for each of the advertising partners of Elegance Essence. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Elegance Essence, which are sent directly to users' browser.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Third Party Privacy Policies</h2>
                <p>
                    Elegance Essence's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Consent</h2>
                <p>
                    By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
