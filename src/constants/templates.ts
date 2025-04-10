export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `<div>
  <h1>Software Proposal</h1>
  <p><strong>Client:</strong> [Client Name]</p>
  <p><strong>Project:</strong> [Project Title]</p>

  <h2>Overview</h2>
  <p>This proposal outlines a solution for [brief description of the problem/goal].</p>

  <h2>Scope</h2>
  <ul>
    <li>Feature 1</li>
    <li>Feature 2</li>
    <li>Maintenance & Support</li>
  </ul>

  <h2>Timeline</h2>
  <p>Estimated delivery: [Start Date] to [End Date]</p>

  <h2>Budget</h2>
  <p>Total estimated cost: $[Amount]</p>

  <h2>Contact</h2>
  <p>Name: [Your Name] <br> Email: [Your Email]</p>
</div>
`,
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `<div>
  <h1>Project Proposal</h1>
  <p><strong>Project Title:</strong> [Title]</p>
  <p><strong>Prepared by:</strong> [Your Name or Team]</p>

  <h2>Introduction</h2>
  <p>This project aims to [project goals/objectives].</p>

  <h2>Methodology</h2>
  <p>We plan to approach the project using the following steps:</p>
  <ol>
    <li>Research & Planning</li>
    <li>Design & Development</li>
    <li>Testing & Deployment</li>
  </ol>

  <h2>Expected Outcome</h2>
  <p>Successful implementation will result in [benefits/outcomes].</p>
</div>
`,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `<div>
  <p>[Your Name]<br>
     [Your Address]<br>
     [City, ZIP Code]<br>
     [Email] | [Phone Number]</p>

  <p>[Date]</p>

  <p>[Recipient Name]<br>
     [Company Name]<br>
     [Recipient Address]</p>

  <p>Dear [Recipient Name],</p>

  <p>I am writing to [state the purpose of the letter].</p>

  <p>[Body content with necessary details]</p>

  <p>Thank you for your attention.</p>

  <p>Sincerely,<br>
     [Your Name]</p>
</div>
`,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `<div>
  <h1>[Your Name]</h1>
  <p>Email: [Your Email] | Phone: [Your Number]</p>

  <h2>Summary</h2>
  <p>Brief summary about your experience and goals.</p>

  <h2>Experience</h2>
  <ul>
    <li><strong>Job Title</strong> – Company Name (Year–Year)</li>
    <li><strong>Job Title</strong> – Company Name (Year–Year)</li>
  </ul>

  <h2>Education</h2>
  <ul>
    <li><strong>Degree</strong> – Institution (Year)</li>
  </ul>

  <h2>Skills</h2>
  <ul>
    <li>Skill 1</li>
    <li>Skill 2</li>
    <li>Skill 3</li>
  </ul>
</div>
`,
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `<div>
  <p>[Your Name]<br>
     [Your Address]<br>
     [Email] | [Phone Number]</p>

  <p>[Date]</p>

  <p>[Hiring Manager Name]<br>
     [Company Name]<br>
     [Company Address]</p>

  <p>Dear [Hiring Manager],</p>

  <p>I am writing to apply for the [Job Title] position at [Company Name].</p>

  <p>[Paragraph highlighting your interest and qualifications]</p>

  <p>Thank you for considering my application.</p>

  <p>Sincerely,<br>
     [Your Name]</p>
</div>
`,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `<div>
  <p>[Your Address]</p>
  <p>[Date]</p>

  <p>Dear [Recipient],</p>

  <p>I hope this letter finds you well. I am writing to [reason for writing].</p>

  <p>[Body content]</p>

  <p>Looking forward to your response.</p>

  <p>Best regards,<br>
     [Your Name]</p>
</div>
`,
  },
];
