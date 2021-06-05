class Animal:
    noise = "Rrrrrr"
    color = "Black"
    def make_noise(self):
        print(f"{self.noise}")
    def set_noise(self, new_noise):
        self.noise = new_noise

    def get_color(self):
        return self.color
    def set_color(self, new_color):
        self.color = new_color
        return self.color

# Inheritance
class Wolf(Animal):
    noise = "grrr"