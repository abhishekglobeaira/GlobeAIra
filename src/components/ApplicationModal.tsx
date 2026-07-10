import { useState } from "react";
import { X, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

interface ApplicationModalProps {
  isOpen: boolean;
  jobTitle: string;
  onClose: () => void;
}

interface ApplicationFormData {
  name: string;
  email: string;
  cvFile: File | null;
  phone: string;
  experience: string;
  skills: string;
  testAnswers: {
    q1: string;
    q2: string;
    q3: string;
    q4: string;
    q5: string;
  };
}

const INITIAL_FORM_DATA: ApplicationFormData = {
  name: "",
  email: "",
  cvFile: null,
  phone: "",
  experience: "",
  skills: "",
  testAnswers: {
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  },
};

export default function ApplicationModal({
  isOpen,
  jobTitle,
  onClose,
}: ApplicationModalProps) {
  const [formData, setFormData] = useState<ApplicationFormData>(INITIAL_FORM_DATA);

  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL ?? '/api';

  const submitApplication = async () => {
    const payload = new FormData();

    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('phone', formData.phone);
    payload.append('experience', formData.experience);
    payload.append('skills', formData.skills);
    payload.append('jobTitle', jobTitle);
    payload.append('q1', formData.testAnswers.q1);
    payload.append('q2', formData.testAnswers.q2);
    payload.append('q3', formData.testAnswers.q3);
    payload.append('q4', formData.testAnswers.q4);
    payload.append('q5', formData.testAnswers.q5);

    if (formData.cvFile) {
      payload.append('cvFile', formData.cvFile);
    }

    const response = await fetch(`${backendUrl}/applications`, {
      method: 'POST',
      body: payload,
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || 'Unable to submit application');
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    if (name.startsWith("test_")) {
      const questionKey = name.replace(
        "test_",
        "",
      ) as keyof ApplicationFormData["testAnswers"];

      setFormData((prev) => ({
        ...prev,
        testAnswers: {
          ...prev.testAnswers,
          [questionKey]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Only PDF files are allowed");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      cvFile: file,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      if (!formData.cvFile) {
        throw new Error('Resume upload is required');
      }

      await submitApplication();
      setSubmitted(true);
    } catch (error) {
      console.error('Application submission failed:', error);
      alert(
        error instanceof Error
          ? error.message
          : 'Application submission failed. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  const isStep1Valid =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.cvFile &&
    formData.experience &&
    formData.skills;

  const isStep2Valid =
    formData.testAnswers.q1 &&
    formData.testAnswers.q2 &&
    formData.testAnswers.q3 &&
    formData.testAnswers.q4 &&
    formData.testAnswers.q5;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-3xl max-h-[95vh] overflow-y-auto rounded-3xl bg-slate-900 border border-cyan-500/20 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-slate-900 border-b border-slate-700 px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Job Application</h2>

            <p className="text-slate-400 text-sm mt-1">{jobTitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Progress */}
        {!submitted && (
          <div className="px-6 pt-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    currentStep >= 1
                      ? "bg-cyan-500 text-white"
                      : "bg-slate-700 text-slate-300"
                  }`}
                >
                  1
                </div>

                <span className="text-slate-300 font-medium">
                  Personal Details
                </span>
              </div>

              <div className="flex-1 h-[2px] bg-slate-700 mx-4">
                <div
                  className={`h-full bg-cyan-500 transition-all duration-300 ${
                    currentStep === 2 ? "w-full" : "w-0"
                  }`}
                />
              </div>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    currentStep >= 2
                      ? "bg-cyan-500 text-white"
                      : "bg-slate-700 text-slate-300"
                  }`}
                >
                  2
                </div>

                <span className="text-slate-300 font-medium">Assessment</span>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* STEP 1 */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-2xl font-bold text-white">
                    Personal Details
                  </h3>

                  {/* Name */}
                  <div>
                    <label className="block text-slate-300 mb-2">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-600 text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 mb-2">
                        Email *
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@gmail.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-600 text-white focus:border-cyan-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 mb-2">
                        Phone *
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-600 text-white focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Resume */}
                  <div>
                    <label className="block text-slate-300 mb-2">
                      Upload Resume (PDF Only) *
                    </label>

                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-600 text-white file:bg-cyan-600 file:border-0 file:text-white file:px-4 file:py-2 file:rounded-lg"
                    />

                    {formData.cvFile && (
                      <p className="text-cyan-400 text-sm mt-2">
                        {formData.cvFile.name}
                      </p>
                    )}
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-slate-300 mb-2">
                      Experience *
                    </label>

                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-600 text-white focus:border-cyan-500 focus:outline-none"
                    >
                      <option value="">Select Experience</option>

                      <option value="0-2">0-2 Years</option>

                      <option value="2-5">2-5 Years</option>

                      <option value="5-10">5-10 Years</option>

                      <option value="10+">10+ Years</option>
                    </select>
                  </div>

                  {/* Skills */}
                  <div>
                    <label className="block text-slate-300 mb-2">
                      Skills *
                    </label>

                    <textarea
                      name="skills"
                      rows={4}
                      value={formData.skills}
                      onChange={handleInputChange}
                      placeholder="React, Node.js, TypeScript..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-600 text-white resize-none focus:border-cyan-500 focus:outline-none"
                    />
                  </div>

                  {/* Next Button */}
                  <div className="flex justify-end">
                    <button
                      type="button"
                      disabled={!isStep1Valid}
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center gap-2 disabled:opacity-50"
                    >
                      Next
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-2xl font-bold text-white">
                    Behavior & Technical Questions
                  </h3>

                  {/* Questions */}
                  {[
                    {
                      key: "q1",
                      question:
                        "When you get stuck on a tough technical issue, how do you usually figure it out?",
                    },
                    {
                      key: "q2",
                      question:
                        "If there’s a disagreement in the team, how do you normally handle it?",
                    },
                    {
                      key: "q3",
                      question:
                        "How do you usually pick up and learn new technologies?",
                    },
                    {
                      key: "q4",
                      question:
                        "When multiple tasks come at once, how do you decide what to work on first?",
                    },
                    {
                      key: "q5",
                      question:
                        "What kind of work or achievements keep you motivated?",
                    },
                  ].map((q, index) => (
                    <div
                      key={q.key}
                      className="bg-slate-800 p-5 rounded-2xl border border-slate-700"
                    >
                      <p className="text-white font-medium mb-4">
                        Q{index + 1}. {q.question}
                      </p>

                      <textarea
                        name={`test_${q.key}`}
                        value={
                          formData.testAnswers[
                            q.key as keyof ApplicationFormData["testAnswers"]
                          ]
                        }
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Write your answer..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-600 text-white resize-none focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                  ))}

                  {/* Buttons */}
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-6 py-3 rounded-xl border border-slate-600 text-white flex items-center gap-2 hover:bg-white/10"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Back
                    </button>

                    <button
                      type="submit"
                      disabled={!isStep2Valid || loading}
                      className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center gap-2 disabled:opacity-50"
                    >
                      {loading ? (
                        "Submitting..."
                      ) : (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Submit
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-3xl font-bold text-white mb-3">
                Application Submitted
              </h2>

              <p className="text-slate-400">
                Thank you for applying for the {jobTitle} position.
              </p>

              <button
                onClick={onClose}
                className="mt-8 px-6 py-3 rounded-xl bg-cyan-600 text-white hover:bg-cyan-700"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
