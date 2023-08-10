from django.db import models

# Create your models here. These models are available in the /admin of the url.

#This is used for the category page in the admin page.
class category(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='image', null=True, blank=True)

    def __str__(self):
        return self.name

#this class is used to create the model for the blog in the admin page
#POST_CHOICES is used for the Postlabel tag inside the Blog in BLOG_API
class blog(models.Model):
    POST_CHOICES = [
        ('POPULAR', 'Popular'),
    ]
    category = models.ForeignKey(category, on_delete=models.CASCADE, null=True) #CASCADE means that if it is deleted, all the contents are as well
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255)
    excerpt = models.CharField(max_length=255, default='')
    content = models.TextField(null=True, blank=True) #null and blank being true means that if they are empty, it is okay
    contentTwo = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='image', null=True, blank=True)
    ingredients= models.TextField(null=True, blank=True)
    postlabel = models.CharField(max_length=100, choices=POST_CHOICES, null=True, blank=True)

    def __str__(self):
        return self.title
