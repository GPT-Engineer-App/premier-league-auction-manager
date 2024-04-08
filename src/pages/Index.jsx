import { Box, Heading, Text, Image, VStack, HStack, Button, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaTrophy, FaCalendarAlt, FaGavel, FaUsers, FaMoneyBillAlt, FaBullhorn } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          SMC Premier League
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Organized by: SMC (Sports Management Company)
        </Text>
        <Image src="https://images.unsplash.com/photo-1566321383084-2ddfb8ce4766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdG91cm5hbWVudHxlbnwwfHx8fDE3MTI1NjM0NjV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cricket Tournament" objectFit="cover" />

        <Heading as="h2" size="xl">
          Tournament Format
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={FaGavel} color="green.500" />
            The tournament will be conducted on an auction basis, where team owners can bid for players to form their teams.
          </ListItem>
          <ListItem>
            <ListIcon as={FaMoneyBillAlt} color="green.500" />
            The entry fee for each team owner is ₹5,000.
          </ListItem>
        </List>

        <Heading as="h2" size="xl">
          Prizes
        </Heading>
        <HStack spacing={8}>
          <VStack>
            <FaTrophy size={48} />
            <Text>1st Prize: ₹50,000</Text>
          </VStack>
          <VStack>
            <FaTrophy size={48} />
            <Text>2nd Prize: ₹25,000</Text>
          </VStack>
        </HStack>
        <Text>Man of the Match: Awarded for exceptional performance in each match</Text>
        <Text>Man of the Series: Awarded to the best player throughout the tournament</Text>

        <Heading as="h2" size="xl">
          Auction Details
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={FaCalendarAlt} color="green.500" />
            Date: [Insert date]
          </ListItem>
          <ListItem>
            <ListIcon as={FaCalendarAlt} color="green.500" />
            Time: [Insert time]
          </ListItem>
          <ListItem>
            <ListIcon as={FaGavel} color="green.500" />
            Venue: [Insert venue]
          </ListItem>
          <ListItem>Each team owner will be given a fixed budget to bid for players.</ListItem>
          <ListItem>The auction will be conducted by professional auctioneers appointed by SMC.</ListItem>
        </List>

        <Heading as="h2" size="xl">
          Tournament Schedule
        </Heading>
        <List spacing={3}>
          <ListItem>The tournament schedule will be announced after the auction process is completed.</ListItem>
          <ListItem>Matches will be played on weekends to ensure maximum participation and viewership.</ListItem>
        </List>
        <Image src="https://images.unsplash.com/photo-1595210382266-2d0077c1f541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwbWF0Y2glMjBzY2hlZHVsZXxlbnwwfHx8fDE3MTI1NjM0NjV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Match Schedule" objectFit="cover" />

        <Heading as="h2" size="xl">
          Player Registration
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={FaUsers} color="green.500" />
            Interested players can register for the auction by contacting SMC officials.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCalendarAlt} color="green.500" />
            Registration Deadline: [Insert date]
          </ListItem>
          <ListItem>Registered players will be divided into different categories based on their skills and experience.</ListItem>
        </List>

        <Heading as="h2" size="xl">
          Sponsorship Opportunities
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={FaBullhorn} color="green.500" />
            SMC welcomes sponsors to support the tournament and gain brand visibility.
          </ListItem>
          <ListItem>Sponsorship packages include title sponsorship, team sponsorship, and individual match sponsorship.</ListItem>
          <ListItem>Interested sponsors can contact SMC officials for more details.</ListItem>
        </List>
        <Image src="https://images.unsplash.com/photo-1595210382266-2d0077c1f541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3BvbnNvcnNoaXB8ZW58MHx8fHwxNzEyNTYzNDY1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sponsorship" objectFit="cover" />

        <Heading as="h2" size="xl">
          Media Coverage
        </Heading>
        <List spacing={3}>
          <ListItem>The tournament will be extensively covered by local media channels, including newspapers, radio, and television.</ListItem>
          <ListItem>Live updates and scores will be provided on SMC's official website and social media handles.</ListItem>
        </List>

        <Button colorScheme="green" size="lg">
          Register Now
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
