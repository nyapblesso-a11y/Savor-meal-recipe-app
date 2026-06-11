import "./Landing.css";

export default function Landing({ onEnter }) {
  return (
    <div className="landing">

      <header className="landing-nav">
        <div className="landing-nav__inner">
          <span className="landing-nav__brand">Savor</span>
          <nav className="landing-nav__links">
            <a className="landing-nav__link landing-nav__link--active" href="#">All Recipes</a>
            <a className="landing-nav__link" href="#">Favorites</a>
          </nav>
          <div className="landing-nav__actions">
            <div className="landing-nav__search">
              <span className="material-symbols-outlined">search</span>
              <input placeholder="Search..." type="text" readOnly />
            </div>
            <button className="landing-nav__icon-btn">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="landing-nav__icon-btn">
              <span className="material-symbols-outlined">shopping_basket</span>
            </button>
            <img
              className="landing-nav__avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsrxwhu3HLABxF_0HZsTnztSpQYULXpZl78vJqGU1o0zmoF5Gktpatudakxmk0Yz6ab2ZJflg4tAmtuzU2VsDZpbiHpzOHY_0u6CfO1sbcGVs2Nbie-xn8acSu7DkSOmAGZqUtNQV-6szJKJ3lWrgSZ7Mq7M60LPaIBMnw6NrPvHlK7sNKKfM6QMZqlzD5GDrQiGkEhdzUbFE9Bn-RuIY1qQDMunzKzvJ8VJTog3sVZm1ZJLWO5pLfnMpwwDcXdQ6-tyjhHnsRX7Q"
              alt="User Profile"
            />
          </div>
        </div>
      </header>

      <main>

        <section className="landing-hero">
          <div className="landing-hero__bg">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQbaiKO_JsNFTkiNnd_T_JH7sasGEAddiYU92Ik8B2AfpHL7Hz7gaZn66fLNsh_rAIz0F2vsUZ1-Rl3cyheKXg61WATuZjjydRJQRixAdkGBZ1ROFi0sBYkkmTiP92haVOndqoiL3NBgl3ksXdhjBo6ea1qykzoXexvW6-aI_Ajljq88e2OFEgKsAOqspNPxYeZu7DtKi1SZqV2O86Z_itaxMPXSL88VR2lqU5djebCrOt7qXSlcTVn85xXJqLdHaJFjh1jszUJOg"
              alt="Fresh ingredients"
            />
            <div className="landing-hero__overlay" />
          </div>
          <div className="landing-hero__content">
            <span className="landing-hero__badge">CRAFTED FOR HOME COOKS</span>
            <h1 className="landing-hero__heading">
              Organize your culinary world with{" "}
              <span className="landing-hero__heading--accent">Savor</span>.
            </h1>
            <p className="landing-hero__sub">
              A beautiful, minimalist space to store, discover, and plan your favourite
              meals without the clutter.
            </p>
            <div className="landing-hero__btns">
              <button className="landing-hero__btn landing-hero__btn--primary" onClick={onEnter}>
                Get Started
              </button>
              <button className="landing-hero__btn landing-hero__btn--secondary" onClick={onEnter}>
                Browse Recipes
              </button>
            </div>
          </div>
        </section>

        <section className="landing-features">
          <div className="landing-features__inner">
            <div className="landing-features__header">
              <h2 className="landing-features__title">Why Savor?</h2>
              <p className="landing-features__subtitle">Elevate your kitchen experience with thoughtful tools.</p>
            </div>

            <div className="bento">
              <div className="bento__card bento__card--large">
                <div>
                  <div className="bento__icon-wrap">
                    <span className="material-symbols-outlined">auto_awesome</span>
                  </div>
                  <h3 className="bento__card-title">Smart Recipe Organization</h3>
                  <p className="bento__card-body">
                    Store, search, and retrieve any recipe in seconds. Whether it's a quick
                    weeknight dinner or a holiday feast, everything has its place.
                  </p>
                </div>
                <div className="bento__card-img-wrap">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrH2wt8mG7RVr3LX_J38TWcy6dljNlaviYwvHmHfGynSS1dfgXxedYnhDnvK15HKNjAx90rn0NpEAw2BnfniOKGjnhZIgxmUkoS9zjK9ZzaK6YhMmctWvszZ-G8MF5U77r1oA93Rlc54V_-hdq8KOgkvc21iAUtHQZQfOBz-rYW5PHZcDu_iQvAeBCkg0F7GTyZkJPti8TdJ5HJlQ-44o7yprYjZImUNkZkYlkG1fF-VHfleV3GEd_fuDw7BKASe_Hj9ThPZI454s"
                    alt="Recipe app preview"
                  />
                </div>
              </div>

              <div className="bento__card bento__card--vertical">
                <div>
                  <h3 className="bento__card-title">Favorite Your Meals</h3>
                  <p className="bento__card-body">
                    Keep your most-loved dishes just a tap away. Build your personal
                    cookbook of tried-and-true classics.
                  </p>
                </div>
                <div className="bento__fav-preview">
                  <div className="bento__fav-row">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                    <span>Mom's Secret Lasagna</span>
                  </div>
                  <div className="bento__fav-row bento__fav-row--dim">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                    <span>Summer Pesto Pasta</span>
                  </div>
                </div>
              </div>

              <div className="bento__card bento__card--square">
                <span className="material-symbols-outlined bento__devices-icon">devices</span>
                <h3 className="bento__card-title bento__card-title--white">Responsive Always</h3>
                <p className="bento__card-body bento__card-body--dim">Access your recipes from any device, anywhere.</p>
              </div>

              <div className="bento__card bento__card--image">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGYkuaQJYM5SpHcYlSXrICVRv9Y2AKkcWcnVsG-chWYEy1hoTJQojNtJ4yPS2fT3lsUcCpYxigYaDWOQ1OpQvCJ6n438eUL6Rk5SpWQN5_UQ5-n0NZ80aC6iioaMdY7gQRkq2uEgDo-N2BQrxfYX45oXowendyj-DZkqpopdBcKKRmfH-SvIYMMjELpF1jgKdV1DUTM0yKv-4-ehbXd-z5mnuz0fmjKO7XykpXUKqLfF2cIX7CHWg08ISHuc3Jg9SOzFiZb0vHCCc"
                  alt="Meal prep"
                />
                <div className="bento__card-image-overlay">
                  <h3 className="bento__card-title bento__card-title--white">Seamless Meal Planning</h3>
                  <p className="bento__card-body bento__card-body--white">Schedule your week with intuitive tools.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="landing-strip">
          <div className="landing-strip__inner">
            <div className="landing-strip__text">
              <h2 className="landing-strip__heading">An interface that stays out of your way.</h2>
              <div className="landing-strip__features">
                <div className="landing-strip__feature">
                  <div className="landing-strip__feature-icon">
                    <span className="material-symbols-outlined">ink_eraser</span>
                  </div>
                  <div>
                    <h4 className="landing-strip__feature-title">Distraction-Free Mode</h4>
                    <p className="landing-strip__feature-body">
                      Focus only on the instructions while you cook with our dedicated
                      full-screen cooking mode.
                    </p>
                  </div>
                </div>
                <div className="landing-strip__feature">
                  <div className="landing-strip__feature-icon">
                    <span className="material-symbols-outlined">list_alt</span>
                  </div>
                  <div>
                    <h4 className="landing-strip__feature-title">Auto-Generated Shopping Lists</h4>
                    <p className="landing-strip__feature-body">
                      Turn any recipe into an organised grocery list with a single click.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="landing-strip__mockup">
              <div className="landing-strip__glow" />
              <div className="landing-strip__card">
                <div className="landing-strip__card-bar">
                  <div className="landing-strip__dot landing-strip__dot--red" />
                  <div className="landing-strip__dot landing-strip__dot--green" />
                  <div className="landing-strip__dot landing-strip__dot--yellow" />
                  <span className="landing-strip__card-label">Savor Recipe App</span>
                </div>
                <div className="landing-strip__card-body">
                  <div className="landing-strip__skeleton landing-strip__skeleton--img" />
                  <div className="landing-strip__skeleton landing-strip__skeleton--title" />
                  <div className="landing-strip__skeleton landing-strip__skeleton--sub" />
                  <div className="landing-strip__skeleton-row">
                    <div className="landing-strip__skeleton landing-strip__skeleton--box" />
                    <div className="landing-strip__skeleton landing-strip__skeleton--box" />
                    <div className="landing-strip__skeleton landing-strip__skeleton--box" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="landing-cta">
          <div className="landing-cta__card">
            <div className="landing-cta__dots" />
            <h2 className="landing-cta__heading">Start your culinary journey today.</h2>
            <p className="landing-cta__body">
              Join thousands of home cooks who have reclaimed their kitchens with Savor.
            </p>
            <button className="landing-cta__btn" onClick={onEnter}>
              Get Started – It's Free
            </button>
          </div>
        </section>

      </main>

      <footer className="landing-footer">
        <div className="landing-footer__inner">
          <div>
            <span className="landing-footer__brand">Savor</span>
            <p className="landing-footer__copy">© 2024 Savor Recipes. Crafted for the home cook.</p>
          </div>
          <nav className="landing-footer__links">
            {["Privacy Policy","Terms of Service","Contact Us","Careers"].map((l) => (
              <a key={l} href="#" onClick={(e) => e.preventDefault()}>{l}</a>
            ))}
          </nav>
          <div className="landing-footer__socials">
            <button><span className="material-symbols-outlined">public</span></button>
            <button><span className="material-symbols-outlined">alternate_email</span></button>
          </div>
        </div>
      </footer>

    </div>
  );
}
