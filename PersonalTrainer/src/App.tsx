import './App.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from './components/Header'
import CustomerListView from './components/CustomerListView'
import TrainingListView from './components/TrainingListView'
import Calendar from './components/Calendar';
import { Chart } from './components/BarChart';

function App() {

  const classes = "p-3.5 m-4 text-lg font-medium text-gray-700 transition-colors"
    + " rounded-lg data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white ";

  return (
    <>
      <Header />

      <Tabs defaultValue="customer">

        <TabsList className="flex justify-center gap-4 bg-gray-100 h-[3.25rem] p-2 my-4 mx-auto rounded-lg shadow-md">
          <TabsTrigger
            value="customer"
            className={classes}
          >
            Customers
          </TabsTrigger>
          <TabsTrigger
            value="training"
            className={classes}
          >
            Training
          </TabsTrigger>
          <TabsTrigger
            value="calendar"
            className={classes}
          >
            Calendar
          </TabsTrigger>

          <TabsTrigger
            value="chart"
            className={classes}
          >
            Chart
          </TabsTrigger>
        </TabsList>

        <TabsContent value="customer">
          <CustomerListView />
        </TabsContent>
        <TabsContent value="training">
          <TrainingListView />
        </TabsContent>
        <TabsContent value="calendar">
          <Calendar />
        </TabsContent>
        <TabsContent value="chart">
          <Chart />
        </TabsContent>
      </Tabs>

    </>
  )
}

export default App;
