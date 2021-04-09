from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from taggit.managers import TaggableManager
from django.utils.text import slugify



#models:
class Post(models.Model):
    STATUS_CHOICES = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )
    title = models.CharField(max_length=250)
    slug = models.SlugField(max_length=25,unique_for_date='publish')#in same date of publish two obj cant have same slug
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name='blog_posts')#releated names for reverse relation ship..
    def autherName(self):
        return self.author.username
    def publishDate(self):
        return self.publish.date()
    body = models.TextField()
    publish = models.DateTimeField(default=timezone.now)
    created = models.DateTimeField(auto_now_add=True)#make auto now when creating
    updated = models.DateTimeField(auto_now=True)#same but always whet saving so when updating also..
    status = models.CharField(max_length=10,choices=STATUS_CHOICES,default='draft')#there is two choices
    objects = models.Manager()
    class Meta:
        ordering = ('-publish',)#sort the data by publish the - for decending
    def __str__(self):
        return self.title
    tags = TaggableManager()

    def save(self, *args, **kwargs):
        if not self.id:
            value = self.title
            self.slug = slugify(value, allow_unicode=True)
        super().save(*args, **kwargs)