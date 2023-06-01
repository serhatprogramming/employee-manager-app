const Employee = ({ name, department, hrlyRate }) => {
  const weeklyRate = () => {
    return moneyString(hrlyRate * 40);
  };

  const annualRate = () => {
    return moneyString(hrlyRate * 40 * 52);
  };

  const moneyString = (amount) => {
    return `$${amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
  };

  return (
    <div>
      <p>
        {name} works at {department} department.
      </p>
      Hourly Rate: {moneyString(hrlyRate)}
      <br />
      Weekly Rate: {weeklyRate()}
      <br />
      Annual Rate: {annualRate()}
      <hr />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Employees</h1>
      <Employee name="John Doe" department={"IT Support"} hrlyRate={33.45} />
      <Employee
        name="Jane Doe"
        department={"Finance Department"}
        hrlyRate={47.88}
      />
      <Employee
        name="Kevin Vandaley"
        department={"Marketing Department"}
        hrlyRate={53.59}
      />
    </div>
  );
};

export default App;
