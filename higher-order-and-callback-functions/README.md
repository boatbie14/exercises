# แบบฝึกหัด Higher Order and Callbacks Functions

## <span style="color: #FF8C00;">Exercise 1: ระบบแปลงและคำนวณสกุลเงิน</span>

#### ข้อมูล

```javascript
const thaiAmounts = [1000, 2000, 5000, 10000, 20000];
```

### 📌 ฟังก์ชันที่ต้องสร้าง

#### ฟังก์ชัน `currencyConverter`

**พารามิเตอร์ที่รับเข้า**

- `amounts` (Array ของจำนวนเงินในสกุลเงินบาท)

### 📌 Callback Functions ที่จะใช้

#### 1. `conversionCallback`

- ฟังก์ชันสำหรับแปลงสกุลเงินบาทเป็นดอลลาร์
- อัตราแลกเปลี่ยน: **1 USD = 35 THB**

#### 2. `processingCallback`

- ฟังก์ชันที่หักค่าธรรมเนียม 5% จากจำนวนเงินที่แปลงแล้ว

### 📌 ผลลัพธ์ที่ต้องการ

Array ของจำนวนเงินในสกุลดอลลาร์ที่หักค่าธรรมเนียมแล้ว:

| จำนวนเงินบาท | การคำนวณ                            | ผลลัพธ์ (USD) |
| ------------ | ----------------------------------- | ------------- |
| 1,000 THB    | แปลงเป็น USD แล้วหักค่าธรรมเนียม 5% | 27.14 USD     |
| 2,000 THB    | แปลงเป็น USD แล้วหักค่าธรรมเนียม 5% | 54.29 USD     |
| 5,000 THB    | แปลงเป็น USD แล้วหักค่าธรรมเนียม 5% | 135.71 USD    |
| 10,000 THB   | แปลงเป็น USD แล้วหักค่าธรรมเนียม 5% | 271.43 USD    |
| 20,000 THB   | แปลงเป็น USD แล้วหักค่าธรรมเนียม 5% | 542.86 USD    |

**ผลลัพธ์ที่คาดหวังในรูปแบบ Array:**

```javascript
[27.14, 54.29, 135.71, 271.43, 542.86];
```

## 📌 ตัวอย่างโครงสร้างฟังก์ชัน (ไกด์ไลน์)

```javascript
// ฟังก์ชันแปลงสกุลเงินบาทเป็นดอลลาร์
const conversionCallback = (thbAmount) => {
  // อัตราแลกเปลี่ยน: 1 USD = 35 THB
  // คำนวณและคืนค่าจำนวนเงินในสกุล USD
};

// ฟังก์ชันหักค่าธรรมเนียม 5%
const processingCallback = (usdAmount) => {
  // หักค่าธรรมเนียม 5% จากจำนวนเงิน USD
  // คืนค่าจำนวนเงินหลังหักค่าธรรมเนียม
};

// ฟังก์ชันหลักสำหรับการแปลงสกุลเงิน
const currencyConverter = (amounts) => {
  // วนลูปแปลงจำนวนเงินในแต่ละรายการ
  // ใช้ Callback Functions ในการแปลงและคำนวณ
  // คืนค่า Array ของจำนวนเงิน USD ที่หักค่าธรรมเนียมแล้ว
};

// เรียกใช้ฟังก์ชัน
const result = currencyConverter(thaiAmounts);
console.log(result); // ควรได้ [27.14, 54.29, 135.71, 271.43, 542.86]
```

### 🔥 โจทย์นี้เน้นอะไร?

✅ การใช้ **Callback Functions** ในการประมวลผลข้อมูล  
✅ การทำงานกับ **Arrays** และการแปลงข้อมูล  
✅ การคำนวณตามเงื่อนไขที่กำหนด  
✅ ฝึกการใช้ **Higher Order Functions** ในการจัดการกับข้อมูล

💡 **ลองเขียนโค้ดตามโจทย์และตรวจสอบว่าได้ผลลัพธ์ตามที่กำหนดหรือไม่! 🚀**
<br><br><br><br>

---

<br><br>

## <span style="color: #FF8C00;">Exercise 2: ระบบคำนวณยอดขาย และโปรโมชันส่วนลด</span>

### 📌 สิ่งที่ต้องสร้าง

#### ข้อมูลสินค้าและยอดขาย

```javascript
const salesData = [
  { id: 1, product: "Laptop", price: 25000, quantitySold: 3 },
  { id: 2, product: "Mouse", price: 500, quantitySold: 15 },
  { id: 3, product: "Keyboard", price: 1500, quantitySold: 7 },
  { id: 4, product: "Monitor", price: 7000, quantitySold: 5 },
  { id: 5, product: "Chair", price: 3000, quantitySold: 2 },
];
```

### 📌 ฟังก์ชันที่ต้องสร้าง

#### 1️⃣ ฟังก์ชัน `calculateRevenue`

**หน้าที่:** คำนวณรายได้ของสินค้าแต่ละรายการ `(price * quantitySold)`

**พารามิเตอร์ที่รับเข้า**

- `items` (Array ของ Object สินค้าที่ขายไป)
- `callback` (ฟังก์ชัน Callback สำหรับคำนวณรายได้ของสินค้าแต่ละรายการ)

**Callback Function ที่จะใช้**

- `calculateItemRevenue` – ใช้คำนวณรายได้ของแต่ละสินค้า

**ผลลัพธ์ที่คาดหวัง**

```javascript
[
  { id: 1, product: "Laptop", revenue: 75000 },
  { id: 2, product: "Mouse", revenue: 7500 },
  { id: 3, product: "Keyboard", revenue: 10500 },
  { id: 4, product: "Monitor", revenue: 35000 },
  { id: 5, product: "Chair", revenue: 6000 },
];
```

#### 2️⃣ ฟังก์ชัน `applyPromotion`

**หน้าที่:** หักส่วนลดให้กับสินค้าที่มียอดขายสูงสุด และให้ส่วนลดพิเศษกับสินค้าที่มีราคาสูง

**เงื่อนไขส่วนลด**

- **สินค้าขายดี (quantitySold สูงสุด)** ได้รับ **ส่วนลด 10%** จากรายได้
- **สินค้าที่มีราคาเดิมเกิน 10,000 บาท** ได้รับ **ส่วนลดพิเศษ 5%**

**พารามิเตอร์ที่รับเข้า**

- `sales` (Array ของ Object ที่คำนวณ revenue แล้ว)
- `callback` (ฟังก์ชัน Callback สำหรับคำนวณส่วนลด)

**Callback Function ที่จะใช้**

- `discountCalculator` – ใช้คำนวณยอดเงินหลังหักส่วนลดตามเงื่อนไข

**ผลลัพธ์ที่คาดหวัง**

```javascript
[
  { id: 1, product: "Laptop", finalRevenue: 71250 }, // ลด 5% เพราะราคาเกิน 10,000
  { id: 2, product: "Mouse", finalRevenue: 6750 }, // ลด 10% เพราะขายดีที่สุด
  { id: 3, product: "Keyboard", finalRevenue: 10500 },
  { id: 4, product: "Monitor", finalRevenue: 33250 }, // ลด 5% เพราะราคาเกิน 10,000
  { id: 5, product: "Chair", finalRevenue: 6000 },
];
```

### 📌 ตัวอย่างโครงสร้างฟังก์ชัน (ไกด์ไลน์)

```javascript
const calculateItemRevenue = (item) => {
  // คำนวณ revenue (price * quantitySold)
};

const calculateRevenue = (items, callback) => {
  // ใช้ loop คำนวณรายได้ของสินค้าแต่ละตัว
};

const discountCalculator = (item, bestSellingProduct) => {
  // ตรวจสอบว่าควรลดราคา 10% หรือ 5% ตามเงื่อนไข
};

const applyPromotion = (sales, callback) => {
  // ใช้ loop และ callback เพื่อหักส่วนลดให้สินค้าตามเงื่อนไข
};

// เรียกใช้ฟังก์ชัน
const revenueData = calculateRevenue(salesData, calculateItemRevenue);
const finalSalesData = applyPromotion(revenueData, discountCalculator);

console.log(finalSalesData);
```

### 🔥 โจทย์นี้เน้นอะไร?

✅ ใช้ **Callback Function** หลายระดับ  
✅ ใช้ **Object และ Array** จัดการข้อมูล  
✅ ใช้ **Loop** และ **เงื่อนไข (if-else)** เพื่อกำหนดส่วนลด  
✅ ฝึก **Higher Order Function** ในการแปลงข้อมูลและประมวลผลหลายขั้นตอน

💡 **ระดับท้าทาย! ลองเขียนโค้ดดู แล้วตรวจสอบผลลัพธ์ว่าตรงกับที่กำหนดหรือไม่! 🚀**
