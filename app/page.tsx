"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useRef, useState } from "react";

export default function Home() {
  const [lenderName, setLenderName] = useState("");
  const [lenderAddress, setLenderAddress] = useState("");

  const [borrowerName, setBorrowerName] = useState("");
  const [borrowerAddress, setBorrowerAddress] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [disbursementDate, setDisbursementDate] = useState("");
  const [contractDate, setContractDate] = useState("");

  const [numberOfPayments, setNumberOfPayments] = useState("");
  const [monthlyPaymentAmount, setMonthlyPaymentAmount] = useState("");
  const [firstPaymentDate, setFirstPaymentDate] = useState("");
  const [countryState, setCountryState] = useState("");
  const [advocateName, setAdvocateName] = useState("");
  const advSeal = "https://hasanlisbon.github.io/pdf-gen/images/adv.png";

  // Reference for the contract HTML
  const contractRef = useRef<HTMLDivElement>(null);

  const downloadContract = async () => {
    console.log("indise download");
    if (!contractRef.current) {
      console.log("indise false");
      return; // Early exit if contractRef is null
    }

    // Use html2canvas to capture the HTML content
    const canvas = await html2canvas(contractRef.current, { scale: 2 });
    const imgData = canvas.toDataURL(advSeal);
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 190; // Adjust as needed
    const pageHeight = pdf.internal.pageSize.height;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;

    // Add image to PDF and handle page breaks
    pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("loan_agreement.pdf");
  };
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Loan Contract Form
      </h2>

      {/* Form to input contract details */}
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Lender&apos;s Name:
          </label>
          <input
            type="text"
            value={lenderName}
            onChange={(e) => setLenderName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Lender&apos;s Address:
          </label>
          <input
            type="text"
            value={lenderAddress}
            onChange={(e) => setLenderAddress(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Borrower&apos;s Name:
          </label>
          <input
            type="text"
            value={borrowerName}
            onChange={(e) => setBorrowerName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Borrower&apos;s Address:
          </label>
          <input
            type="text"
            value={borrowerAddress}
            onChange={(e) => setBorrowerAddress(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contract Date:
          </label>
          <input
            type="date"
            value={contractDate}
            onChange={(e) => setContractDate(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Loan Amount:
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Interest Rate (%):
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Disbursement Date:
          </label>
          <input
            type="date"
            value={disbursementDate}
            onChange={(e) => setDisbursementDate(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Number of Payments:
          </label>
          <input
            type="number"
            value={numberOfPayments}
            onChange={(e) => setNumberOfPayments(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Monthly Payment Amount:
          </label>
          <input
            type="number"
            value={monthlyPaymentAmount}
            onChange={(e) => setMonthlyPaymentAmount(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Payment Date:
          </label>
          <input
            type="date"
            value={firstPaymentDate}
            onChange={(e) => setFirstPaymentDate(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Governing Law (Country/State):
          </label>
          <input
            type="text"
            value={countryState}
            onChange={(e) => setCountryState(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Advocate&apos;s Name:
          </label>
          <input
            type="text"
            value={advocateName}
            onChange={(e) => setAdvocateName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </form>

      {/* Preview Section */}
      <div
        ref={contractRef}
        className="mt-8 p-4 border rounded bg-white shadow-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Loan Agreement</h1>
        <p>
          This Loan Agreement (&quot;Agreement&quot;) is made and entered into
          on this {contractDate}, by and between:
        </p>
        <p>
          <strong>Lender:</strong> {lenderName}, residing at {lenderAddress}
        </p>
        <p>
          <strong>Borrower:</strong> {borrowerName}, residing at{" "}
          {borrowerAddress}
        </p>

        <h2 className="text-2xl font-semibold my-4">Recitals</h2>
        <p>
          Whereas, the Lender agrees to lend to the Borrower, and the Borrower
          agrees to repay the loan subject to the following terms and
          conditions:
        </p>

        <h3 className="text-xl font-medium my-3">
          1. Loan Amount and Disbursement
        </h3>
        <p>
          The Lender hereby agrees to lend the Borrower the sum of {loanAmount},
          which shall be disbursed to the Borrower on or before{" "}
          {disbursementDate}.
        </p>

        <h3 className="text-xl font-medium my-3">2. Interest Rate</h3>
        <p>
          The Loan shall bear interest at the rate of {interestRate}% per annum,
          calculated from the date of disbursement until the Loan is fully
          repaid.
        </p>

        <h3 className="text-xl font-medium my-3">3. Repayment Terms</h3>
        <p>
          The Borrower agrees to repay the Loan in {numberOfPayments} equal
          monthly installments of {monthlyPaymentAmount}, starting on{" "}
          {firstPaymentDate}.
        </p>

        <h3 className="text-xl font-medium my-3">4. Prepayment</h3>
        <p>
          The Borrower may prepay the Loan in whole or in part at any time
          without penalty.
        </p>

        <h3 className="text-xl font-medium my-3">5. Default</h3>
        <p>
          In the event that the Borrower fails to make any payment due under
          this Agreement, the Borrower shall be in default.
        </p>

        <h3 className="text-xl font-medium my-3">6. Governing Law</h3>
        <p>
          This Agreement shall be governed by and construed in accordance with
          the laws of {countryState}.
        </p>

        <h3 className="text-xl font-medium my-3">Signatures</h3>
        <div className="grid grid-cols-2 gap-10 mt-6">
          <div>
            <p className="font-semibold">Lender&apos;s Signature:</p>
            <div className="border-t-2 border-gray-400 mt-2 mb-2"></div>
            <p>{lenderName}</p>
          </div>
          <div>
            <p className="font-semibold">Borrower&apos;s Signature:</p>
            <div className="border-t-2 border-gray-400 mt-2 mb-2"></div>
            <p>{borrowerName}</p>
          </div>
        </div>

        <div className="my-8">
          <div className="mt-2">
            <img
              src={advSeal}
              alt="Advocate's Seal"
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>

        <div>
          <p className="font-semibold">Advocate&apos;s Signature:</p>
          <div className="border-t-2 border-gray-400 mt-2 mb-2"></div>
          <p>{advocateName}</p>
        </div>
      </div>

      <button
        onClick={downloadContract}
        className="mt-8 w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700"
      >
        Download Contract
      </button>
    </div>
  );
}
