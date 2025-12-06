from django.db import models

# Create your models here.

class Task(models.Model):    
    title  = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)

    
    def __str__(self):
        
        return f"Titulo: {self.title}\nDescripcion: {self.description}\nEstado: {self.done}"