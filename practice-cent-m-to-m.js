
// একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 


function centimeterToMeter(centimeter) {
    const meter = centimeter / 100;
    return meter;
  }
  
  const myCentimeter = 150;
  const myMeter = centimeterToMeter(myCentimeter);
  console.log('Total meters are:', myMeter, 'Meters.');
  