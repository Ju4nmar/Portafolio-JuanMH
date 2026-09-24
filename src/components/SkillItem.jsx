import useInViewport from "../hooks/useInViewport";

export default function SkillItem({ name, icon }) {
  const [ref, isVisible] = useInViewport({ threshold: 0.25 });

  return (
    <div
      ref={ref}
      className={`skill-item${isVisible ? " visible" : ""}`}
      data-skill={name}
    >
      <i className={icon}></i>
    </div>
  );
}
